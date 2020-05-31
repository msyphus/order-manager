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

router.post("/api/orders", function(req, res) {
    order.addOrder(["order_item", "completed"], [req.body.order_item, req.body.completed], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/orders/:id", function(req, res) {
    var id = "id = " + req.params.id;

        order.changeStatus(
        {
            completed: req.body.completed
        },
        id,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;