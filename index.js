
// function to make the grid
function makeGrid() {
//getting the input for grid
   var height = $("#input_height").val();
  var width = $("#input_width").val();

  //clearing out the pixel
  $("#pixel").html('');

 var i=0
  //generating the pixel based on the input
  while( i<height ) {
    $('#pixel').append('<tr></tr>');
    i++
  };
//genrating the pixel width
  var j=0
  while( j<width ){
    $("tr").each(function() {
      $(this).append("<td class='col'></td>");
    });
    j++
  };

  // click functions clicking on boxes to fill up the colors
    $(".col").click(function(){
     var cellColor = $("#colorPicker").val();
     $(this).attr('bgcolor',cellColor);
   });
  
  //clearing out the boxes filled with colors
  $(".col").dblclick(function() {
    $(this).attr('bgcolor','');
  });  

};
//generating random grids
function randomGrid() {
  

  $("#pixel").html('');
  
  //getting random numbers to put on height and width of pixels
  var randomHeight = 1 + Math.floor(Math.random() * 1);
  var randomWidth = 1 + Math.floor(Math.random() * 1);
  
  //same as grid function
  for(var i=0; i<randomHeight; i++) {
    $("#pixel").append("<tr></tr>");
  };

 //same as grid function
  for(var j=0; j<randomWidth; j++){
    $("tr").each(function() {
      $(this).append("<td class='col'></td>");
    });
  };

 
    $(".col").click(function(){
     var colColor = $("#colorPicker").val();
     $(this).attr('bgcolor',colColor);
   });
  
  
  $(".col").dblclick(function() {
    $(this).attr('bgcolor','');
  }); 
    
}
//colour picker function
function pickColour(){
  $('#colorPicker').change(function(){
                             var cp = $('#colorPicker').val();
  $('.colourBox').css('background-color', cp);
    $('.colourBox').html('');
    $('.colourBox').append(cp);
                             });
  
}
//loading on document
$(document).ready(function() {
   pickColour();
  randomGrid();

  
  $("#sizePicker").on("submit", function(sp) {
     
    makeGrid();
    sp.preventDefault();
    });
  
 

});


