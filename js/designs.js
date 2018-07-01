// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    //Empty Grid 
      
      $("#pixelCanvas").empty();
     
      // Select size input
      
      const height = $("#inputHeight").val();
        const weight = $("#inputWidth").val();
  
      
   for(let i=0;i<height;i++){
          let row = "<tr>";
          for(let j=0;j<weight;j++){
              row+="<td></td>";
          }
          row+="</tr>";
          $("#pixelCanvas").append(row);
     
      }  
    
    }
  
  //Call makeGrid() Function
  
  $("#sizePicker").submit(function(event){
    event.preventDefault();
      makeGrid();
    })
  
  
  
  
  // Select color input
  
  $( "#pixelCanvas" ).on( "click", "td", function( event ) {
      $(this).css("background-color", $("#colorPicker").val());
  });
  
  let down;
  
  $(document).mousedown(function () {
      Down = true;
  })
  $(document).mouseup(function () {
      Down = false;
  });
  
  $('table').on('mouseover', 'td', function () {
      if (Down) {
        var color = $('#colorPicker').val();
          $(this).css( 'background', color);
      }
  });
  
  
  //Reset Grid
  
  function resetGrid(){
    //event.preventDefault();
     $("#pixelCanvas").empty();
  }
  