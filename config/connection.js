var mysql = require("mysql");
var sqlpass = require("../key");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
    connection = mysql.createConnection({
        host: "localhost",
        port: 3308,
        user: "root",
        password: sqlpass,
        database: "orders_db"
});
};

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to thread " + connection.threadId);
});

module.exports = connection;