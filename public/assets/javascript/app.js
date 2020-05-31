$(function() {
    $(".statusChange").on("click", function(event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("newstatus");

        var updatedStatus = {
            completed: newStatus
        };

        $.ajax("/api/orders/" + id, {
            type: "PUT",
            data: updatedStatus
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $("#subForm").on("click", function(event) {
        event.preventDefault();

        var newOrder = {
            order_item: $("#orderItem").val().trim(),
            completed: false
        };

        $.ajax("/api/orders", {
            type: "POST",
            data: newOrder
        }).then(function() {
            location.reload();
        });
    });
});