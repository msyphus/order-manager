var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/orders_controller");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Connected to PORT " + PORT);
});

