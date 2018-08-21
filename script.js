var button = $("#lead-banner a");

button[0].onClick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
};