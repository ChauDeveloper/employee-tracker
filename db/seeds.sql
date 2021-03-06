INSERT INTO departments (name)
VALUES
  ('production'),
  ('distribution'),
  ('finance'),
  ('marketing'),
  ('HR'),
  ('IT');

  INSERT INTO roles (title, salary, department_id)
VALUES
  ('mechanic',46750, 1),
  ('operator',65806, 1),
  ('programmer',86370, 1),
  ('electrician',69430, 1),
  ('machinist',45000, 1),
  ('material handler',37997, 2),
  ('shipping associate',36729, 2),
  ('warehouse clerk',34240, 2),
  ('forklift operator',35780, 2),
  ('mechandise pickup',32000, 2),
  ('loader',34000, 2),
  ('stocker',32750, 2),
  ('warehouse packer',34547, 2),
  ('financial analyst',67340, 3),
  ('financial advisor',63634, 3),
  ('economist',62000, 3),
  ('budget analyst',68000, 3),
  ('C.F.O',400000, 3),
  ('payroll clerk',42656, 3),
  ('finance director',73000, 3),
  ('purchasing manager',140000, 3),
  ('director of marketing',130000, 4),
  ('marketing analyst',75390, 4),
  ('marketing coordinator',72350, 4),
  ('marketing consultant',75689, 4),
  ('marketing specialist',72343, 4),
  ('employment manager',80354, 5),
  ('recruiter',57650, 5),
  ('HR Associate',47532, 5),
  ('HR Analyst',55754, 5),
  ('staff coordinator',67345, 5),
  ('HR Trainee',68500, 5),
  ('HR Supervisor',87545, 5),
  ('HR Specialist',67496, 5),
  ('Employee Relations Manager',83435, 5),
  ('HR Administrator',67245, 5),
  ('General HR Manager',86578, 5),
  ('Chief Human Resources Officer',97578, 5),
  ('CTO',246789, 6),
  ('CIO',157790, 6),
  ('Director of Engineering',130353, 6),
  ('Software Architect',160350, 6),
  ('Technical Project Manager',83640, 6),
  ('Business Account Manager',55259, 6),
  ('Procurement manager',138460, 6),
  ('IT Infra Manager',135799, 6),
  ('Senior Manager IT',150457, 6),
  ('Production Manager', 75457, 1),
  ('Distribution Manager', 74754, 2);





INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Mary', 'Kay',1,48),
  ('Ronald', 'Firbank', 2 ,48),
  ('Virginia', 'Woolf', 3,48),
  ('Piers', 'Gaveston', 4,48),
  ('Charles', 'LeRoi', 5,48),
  ('Katherine', 'Mansfield', 6,48),
  ('Dora', 'Carrington',7 ,48),
  ('Edward', 'Bellamy', 8,48),
  ('Montague', 'Summers',9, 49),
  ('Octavia', 'Butler',10, 49),
  ('Unica', 'Zurn', 11, 49),
  ('James', 'Fraser',12 , 49),
  ('Jack', 'London', 13, 49),
  ('Robert', 'Bruce', 14, 49),
  ('Peter', 'Greenaway', 15, 49),
  ('Derek', 'Jarman', 16, 49),
  ('Paolo', 'Pasolini',17, 49 ),
  ('Heathcote', 'Williams', 18, null),
  ('Sandy', 'Powell',19, 20 ),
  ('Emil', 'Zola',20, 18),
  ('Sissy', 'Coalpits', 21, 20),
  ('Antoinette', 'Capet', 22, 18),
  ('Samuel', 'Delany',23, 20 ),
  ('Tony', 'Duvert',24 , 20),
  ('Dennis', 'Cooper', 25, 20),
  ('Monica', 'Bellucci',26, 20),
  ('Samuel', 'Johnson', 27, 20),
  ('John', 'Dryden', 28, 20),
  ('Alexander', 'Pope',29, 22),
  ('Lionel', 'Johnson', 30, 22),
  ('Aubrey', 'Beardsley', 31, 22),
  ('Tulse', 'Luper',32 , 22),
  ('William', 'Morris', 33, 22),
  ('George', 'Shaw',34 , 22),
  ('Arnold', 'Bennett', 35, 22),
  ('Algernon', 'Blackwood', 36, 22),
  ('Rhoda', 'Broughton',37 , 22),
  ('Hart', 'Crane', 38, null),
  ('Vitorio', 'DeSica', 39, null),
  ('Wilkie', 'Collins', 40, null),
  ('Elizabeth', 'Gaskell', 41, 40),
  ('George', 'Sand',42 , 38 ),
  ('Vernon', 'Lee', 43, 38),
  ('Arthur', 'Machen', 44, 38),
  ('Frederick', 'Marryat', 45, 38),
  ('Harriet', 'Martineau', 46, 38),
  ('George', 'Meredith', 47, 38),
  ('Margaret', 'Oliphant',1 , 38),
  ('Anthony', 'Trollope', 2, 38),
  ('Charlotte', 'Yonge', 3, 38),
  ('Horace', 'Walpole', 4, 38),
  ('Matthew', 'Lewis', 5, 38),
  ('William', 'Bedford',6 , 38),
  ('Anne', 'Radcliffe',7 , 38),
  ('Charles', 'Brown',8 , 41),
  ('Eliza', 'Parsons',9 , 41),
  ('Susan', 'Hill', 10, 41),
  ('Sydney', 'Owenson',11 , 41),
  ('Hubert', 'Crackanthorpe',12 , 41),
  ('William', 'Carleton',13, 41 ),
  ('Gerald', 'Griffin', 14, 41),
  ('Jade', 'Charlson', 15, 41),
  ('James', 'William',16, 41),
  ('Benjord', 'Kay',17, 41),
  ('Yaong', 'Lin', 1, 41),
  ('Uyen', 'Tran', 19, 41),
  ('Elise', 'Beth',49, 40),
  ('Dumbedore', 'Malvis',21 ,18),
  ('Snape', 'Wellington', 48, 40);

INSERT INTO managers (manager_id, name)
VALUES
(NULL, NULL),
(48, 'Margaret Oliphant'),
(49, 'Anthony Trollope'),
(20, 'Emil Zola'),
(18, 'Heathcote Williams'),
(22, 'Antoinette Capet'),
(40, 'Wilkie Collins'),
(38, 'Hart Crane '),
(41, 'Elizabeth Gaskell');