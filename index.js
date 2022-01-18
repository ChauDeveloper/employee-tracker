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
      choices: ['View all Department','View all Roles', 'View all Employees', 'Update an Employee Role']
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

 
    // connection.query ('SELECT * FROM DEPARTMENTS ;', (error, rows)=> {
    //   if (error) throw error;

    //   console.table(rows);
    //   connection.end();
    // })
}


  connection.connect (error => {
      if (error) throw error;

      promptUser();

  });
