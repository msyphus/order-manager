var connection = require("../config/connection");

function makePlaceholders(number) {
    var holders = [];
    
    for (var i = 0; i < number; i++) {
        holders.push("?");
    }
    return holders.toString();
}

var orm = {
    listAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    addOrder: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += "(";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += makePlaceholders(val.length);
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, val, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;