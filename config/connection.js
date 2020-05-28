var mysql = require("mysql");
var sqlpass = require("../key");

var connection = mysql.createConnection({ 
    host: "localhost",
    port: 3308,
    user: "root",
    password: sqlpass.password,
    database: "orders_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to thread " + connection.threadId);
});

module.exports = connection;