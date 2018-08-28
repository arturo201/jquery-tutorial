$(document).ready("click", function(){
   $("*").on("click", function(e){
      console.log(e.target);
      console.log("event type is! " + e.type);
      console.log("x coordinates of the event is! " + e.pageX);
      console.log("Y coordinates of the event is! " + e.pageY);
      e.stopPropagation();
   });
});