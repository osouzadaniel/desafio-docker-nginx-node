const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) values('Novo Nome')"
connection.query(sql)
connection.end()

app.get('/', (req,res) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    const sql = "SELECT * FROM people"
    connection.query(sql, (error, results, fields) => {
        if (error) {
          throw error
        };
        
        let table = '<table>';
        table += '<tr><th>ID</th><th>Name</th></tr>';
        for(let people of results) {      
          table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        }
    
        table += '</table>';

        res.send('<h1>Full Cycle Rocks!</h1>' + table)
    });
    connection.end()

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})