var connection = require("../config/connection");

function makePlaceholders(number) {
    var holders = [];
    
    for (var i = 0; i < number; i++) {
        holders.push("?");
    }
    return holders.toString();
};

function objToSql(obj) {
    var sqlString = [];

    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            sqlString.push(key + "=" + value);
        }
    }
    return sqlString.toString();
};

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

        connection.query(queryString, val, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    changeStatus: function(table, objColVals, id, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += id;

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;