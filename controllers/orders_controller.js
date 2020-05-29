var express = require("express");
var router = express.Router();
var order = require("../models/orders");

router.get("/", function(req, res) {
    order.listAll(function(data) {
        var hbsObject = {
            orders: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/orders", function(req, res) {
    order.addOrder(["order_item", "completed"], [req.body.order_item, req.body.completed], function(result) {
        res.json({id: result.insertId});
        console.log("controller", result);
    });
});

module.exports = router;