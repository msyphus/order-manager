var connection = require("../config/connection");

var orm = {
    listAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;