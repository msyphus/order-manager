var orm = require("../config/orm");

var order = {
    listAll: function(cb) {
        orm.listAll("orders", function(result) {
            cb(result);
        });
    },
    addOrder: function(col, val, cb) {
        orm.addOrder("orders", col, val, function(result) {
            cb(result);
        });
    },
    changeStatus: function(objColVals, id, cb) {
        orm.changeStatus("orders", objColVals, id, function(result) {
            cb(result);
        });
    }
};

module.exports = order;