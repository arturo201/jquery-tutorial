$(document).ready(function(){
    alert("jquery loaded");
});


$("#contact-methods").css({border: "2px solid red"})
.next().css({border:"2px solid green"})
.closest("section").css({border: 2px solid blue})


var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs Cheese:</div>";

$("#tweets div p").after(tweet);
