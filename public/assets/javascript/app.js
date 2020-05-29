$(function() {
    console.log("ready");

    $("#subForm").on("click", function(event) {
        event.preventDefault();

        console.log("clicked");

        var newOrder = {
            item: $("#orderItem").val().trim(),
            completed: false
        };

        console.log(newOrder);

        $.ajax("/api/orders", {
            type: "POST",
            data: newOrder
        }).then(function() {
            console.log("added new order");
            location.reload();
        });
    });
});