
$(function() {
    console.log("ready");

    $(".addOrder").on("submit", function(event) {
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