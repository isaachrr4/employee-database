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
    return inquirer.prompt

}


questionPrompt();