$(function() {
    console.log("ready");
    $(".statusChange").on("click", function(event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("newStatus");

        var updatedStatus = {
            completed: newStatus
        };

        $.ajax("/api/orders/" + id, {
            type: "PUT",
            data: updatedStatus
        }).then(
            function() {
                console.log("marked order as ", newStatus);
                // location.reload();
            }
        );
    });

    $("#subForm").on("click", function(event) {
        event.preventDefault();

        console.log("clicked");

        var newOrder = {
            order_item: $("#orderItem").val().trim(),
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