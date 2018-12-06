var mysql = require('mysql');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Ivan',
    password: 'ipzparasha',
    database: 'ipzDB',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(error) {
    if (error) console.log('Unable to connect to database');
    console.log('You are now connected...');

});

app.use(cors());
app.use(bodyParser.json());

app.post('/userRequests', cors(), function(req, resp) {
    connection.query("SELECT * FROM clientsRequests", function(error, rows) {
        if (error) throw error;
        console.log("Got users requests data");
        console.log('***************************************');
        let toJson = JSON.stringify(rows);
        resp.send(toJson);
    });
});

app.post('/addUser', cors(), function(req, resp) {
    console.log('Got new user data...');
    var sql = `INSERT INTO clientsRequests
            (
                ID, fullName, phoneNumber, day, time
            )
            VALUES
            (
                ?, ?, ?, ?, ?
            )`;
    connection.query(sql, [undefined , req.body.name, req.body.phone, req.body.day, req.body.time], function (err) {
        if (err) {
            throw err
        } else {
            console.log('Data sent to db');
            console.log('########################################');
        }
    });
});

app.post('/removeClient', (req, res) => {
    console.log('Got client to remove...');
    connection.query('DELETE FROM clientsRequests WHERE ID = ?', req.body.ID , (err, result) => {
        if(err) throw err;
        console.log('Removed');
    });
});

app.post('/adminData', cors(), function(req, resp) {
    connection.query("SELECT * FROM adminData", function(error, rows) {
        if (error) throw error;
        console.log('-=-=-=-=-=-=-=-=-=-\n' + "Got admin data\n" + '-=-=-=-=-=-=-=-=-=-\n');
        let toJson = JSON.stringify(rows);
        resp.send(toJson);
    });
});

app.listen(8080, () => {console.log('Server is running')});