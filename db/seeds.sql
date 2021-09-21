INSERT INTO departments
(name)
VALUES
("Management"),
("Chefs"),
("BOH"),
("FOH");

INSERT INTO roles 
(title, salary, department_id)
VALUES
("LineCook", 20000, 1),
("Bartender", 25000, 2),
("Head Chef", 30000, 3),
("Sous Chef", 28000, 4),
("Dishwasher", 15000, 5),
("Busser",12000, 6),
("Hostess", 13000, 7);

INSERT INTO employees
  (first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Thompson', 1, NULL),
('Seth', 'Gregges', 1, NULL),
('Jessica', 'Hans', 4, NULL),
('Brett', 'Beavers', 3, NULL),
('Juan', 'Torres', 4, NULL),
('Sam', 'Bradley', 5, NULL),
('John', 'Reily', 6, NULL),
('Chrisse', 'Valdez', 7, NULL),
('Jason', 'Bourne',1, NULL);
