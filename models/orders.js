var orm = require("../config/orm");

var order = {
    listAll: function(cb) {
        orm.listAll("orders", function(result) {
            cb(result);
        });
    }
};

module.exports = order;