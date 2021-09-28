const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'K!ddswankk187',
        database: 'employee_database'
    },
    console.log('Sucessfully connected to database!')
);

const questionPrompt = () => {
    return inquirer.prompt([
        {
        type:'list',
        name:'chooseActions',
        message:'Please select which action you would like to take please',
        choices: [
            'Select Departments',
            'Check Roles',
            'View Employees',
            'Add Roles',
            'Add Employee',
            'View Salary',
            'Goodbye!'
        ]
    }
    ])
    .then((questionData) => {
        switch (questionData.chooseActions) {
            case 'Select Department':
                db.query('SELECT * FROM departments', function (err, results){
                    console.log(results);
                    return questionPrompt;
                })
                break;

                case 'Check Roles':
                    db.query('SELECT * FROM roles', function (err, results){
                        console.log(results);
                        return questionPrompt;
                    })
                    break;

                    case 'View Employees':
                        db.query('SELECT * FROM employees', function (err, results) {
                            console.log(results);
                            return questionPrompt;
                        })
                        break;

                        case 'Add Roles':
                            db.query('SELECT * FROM roles', function (err, results) {
                                console.log( results);
                                return questionPrompt;
                            })
                            break;

                            case 'Add Employee':
                                db.query('SELECT * FROM employees', function (err, results){
                                    console.log(results);
                                    return questionPrompt;
                                })
                                break;

                                case 'View Salary':
                                    db.query('SELECT * FROM salary', function (err, results){
                                        console.log(results);
                                        return questionPrompt;
                                    })
        }
        
    })
    
    
  


}


questionPrompt();