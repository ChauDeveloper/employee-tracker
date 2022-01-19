const inquirer = require ('inquirer');
const cTable = require ('console.table');
const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
      //in case mysql has connection issue in the future
      // host: '127.0.0.1',
      host: 'localhost',
      user: 'root',
      password: 'chau',
      database: 'tracker'
    });

function promptUser() {

  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'Choose your options: (use up and down arrow key, press enter to select)',
      choices: ['View all Department','View all Roles', 'View all Employees', 'Add a Department' ,'Add a Role', 'Add an Employee','Update an Employee Role']
    }
  ])
  .then ((answer) => {

    if (answer.options === 'View all Department') {
      connection.query ('SELECT * FROM DEPARTMENTS ;', (error, rows)=> {
      if (error) throw error;

      console.table(rows);
      connection.end();
    })
    }

    else if (answer.options === 'View all Roles') {
      connection.query ('SELECT roles.id, roles.title, roles.salary, departments.name AS department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;', (error, rows)=> {
      if (error) throw error;

      console.table(rows);
      connection.end();
    })
    }

    else if (answer.options === 'View all Employees') {
      connection.query ('SELECT employees.first_name, employees.last_name, roles.title AS role_title, departments.name AS department_name, roles.salary AS salary,  managers.name AS manager_name FROM employees LEFT JOIN managers on employees.manager_id = managers.manager_id LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id ;', (error, rows)=> {
      if (error) throw error;
      console.table(rows);
      connection.end();
    })
    }


    else if (answer.options === 'Add a Department' ) {
      inquirer.prompt ([
        {
          type: 'type',
          name: 'department',
          message: 'Type a department you would like to add:',
           }         
        ]).then ((name) => {
          connection.query('INSERT INTO departments (name) VALUE ("?")', [name], (error, result) => {
            if (error) throw error;

            console.log(result);
            connection.query ('SELECT * FROM departments ;', (error, rows)=> {
              if (error) throw error;
        
              console.table(rows);
              connection.end();
            })
           
          })
        })
  }


  else if (answer.options === 'Add a Role') {
    connection.query('SELECT * FROM departments;', (error, departmentsData) => {
      if (error) throw error;

    const departments = departmentsData.map ( departments => {
      const name = `${departments.name}`;
      const departmentID = departments.id;

    return { name: name, value:departmentID};
    });
  
    inquirer.prompt ([
      {
        type: 'type',
        name: 'role',
        message: 'Type a role you would like to add:',
         },
      {
        type: 'list',
        name: 'department',
        message: 'Which departments does it belong to?',
        choices: departments, 
      },
      {
        type: 'type',
        name: 'salary',
        message: 'How much is the annual salary for this role?',
      }     
      ]).then ((data) => {
        connection.query('INSERT INTO roles (title, department_id , salary) VALUE ("?",?,?)', [data.role, data.department, data.salary], (error, result) => {
          if (error) throw error;

          console.log(result);
          connection.query ('SELECT roles.id, roles.title, roles.salary, departments.name AS department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;', (error, rows)=> {
            if (error) throw error;
      
            console.table(rows);
            connection.end();
          })
        });
        })
      })
}

else if (answer.options === 'Add an Employee') {
  connection.query('SELECT * FROM roles;', (error, rolesData) => {
    if (error) throw error;
  const roles = rolesData.map(({id, title}) => ({name: title, value:id }));

    connection.query('SELECT * FROM managers;', (error, managersData) => {
      if (error) throw error;
      const managers = managersData.map(({manager_id, name}) => ({name:name, value:manager_id}));
   

  inquirer.prompt ([
    {
      type: 'type',
      name: 'first_name',
      message: 'First Name:',
       },
    {
      type: 'type',
      name: 'last_name',
      message: 'Last Name:',
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Who is the manager:',
      choices: managers,
    },
    {
      type: 'list',
      name: 'job_title',
      message: "Choose their job's title:",
      choices: roles, 
    },    
    ]).then ((data) => {
      connection.query('INSERT INTO employees (first_name,last_name, manager_id, role_id) VALUE ("?","?",?,?)', [data.first_name, data.last_name, data.manager, data.job_title], (error, result) => {
        if (error) throw error;

        console.log(result);
        connection.query ('SELECT employees.first_name, employees.last_name, roles.title AS role_title, departments.name AS department_name, roles.salary AS salary,  managers.name AS manager_name FROM employees LEFT JOIN managers on employees.manager_id = managers.manager_id LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id ;', (error, rows)=> {
          if (error) throw error;
    
          console.table(rows);
          connection.end();
        })
      })
      });
      })
    })
}


    else if (answer.options === 'Update an Employee Role') {
      connection.query('SELECT * FROM employees;', (error, employeesData) => {
        if (error) throw error;

      const employees = employeesData.map (employees => {
        const name = `${employees.first_name} ${employees.last_name}`;
        const employeeID = employees.id;

      return { name: name, value:employeeID};
      });
      
      inquirer.prompt ([
        {
          type: 'list',
          name: 'employee',
          message: 'Select an Employee to Update',
          choices: employees,
        }
      ]).then(({employee}) => {
        connection.query('SELECT * FROM roles;', (error, rolesData) => {
          if (error) throw error;
        const roles = rolesData.map(({id, title}) => ({name: title, value:id }));

        inquirer.prompt ([
          {
            type: 'list',
            name: 'role',
            message: 'Select a new role',
            choices: roles,
          }
        ]).then (({ role }) => {
          connection.query('UPDATE employees SET role_id = ? WHERE id = ? ;', [role, employee], (error, result) => {
            if (error) throw error;

            console.log(result);
            connection.end();
          })
        })
      })
     }) 
    });
  }
  





  })
}


  connection.connect (error => {
      if (error) throw error;

      promptUser();

  });
