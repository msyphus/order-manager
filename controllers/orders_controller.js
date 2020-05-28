var express = require("express");
var router = express.Router();
var order = require("../models/orders");

router.get("/", function(req, res) {
    order.listAll(function(data) {
        var hbsObject = {
            orders: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;