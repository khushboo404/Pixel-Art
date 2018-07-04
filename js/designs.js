// Lad grid with 50*20
const height = $("#inputHeight").val();
const weight = $("#inputWidth").val();
for(let i=0;i<height;i++){
    let row = "<tr>";
    for(let j=0;j<weight;j++){
        row+=`<td id='${i}_${j}'></td>`;
    }
    row+="</tr>";
    $("#pixelCanvas").append(row);

}  


let colorSelected = "#000";

function makeGrid() {
    //Empty Grid 
      
      $("#pixelCanvas").empty();
     
      // Select size input
      
    const height = $("#inputHeight").val();
    const weight = $("#inputWidth").val();
  
      
   for(let i=0;i<height;i++){
          let row = "<tr>";
          for(let j=0;j<weight;j++){
              row+=`<td id='${i}_${j}'></td>`;
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
  
//  select color from options

function setColor(color){
    colorSelected = color;
}

// Eraser function

function eraser(){
    colorSelected = "";
  }
    

$("#colorPicker").on("change", ()=>{
    setColor($("#colorPicker").val());
});

  // Select color input
  
  $( "#pixelCanvas" ).on( "click", "td", function( event ) {
      $(this).css("background-color", colorSelected);
  });
  
  let down = false;
  
  $(document).mousedown(function () {
      down = true;
  })
  $(document).mouseup(function () {
      down = false;
  });
  
  $('table').on('mouseover', 'td', function () {
      if (down) {
        var color = colorSelected;
          $(this).css( 'background', color);
      }
  });
  
  
  //Reset Grid
  
  function resetGrid(){
    // event.preventDefault();
    // $("#pixelCanvas").empty();
    const height = $("#inputHeight").val();
    const weight = $("#inputWidth").val();
  
      
   for(let i=0;i<height;i++){
        for(let j=0;j<weight;j++){
            // $(this).css('background-color','#2F4F4F');
            $(`#${i}_${j}`).css("background-color",'');
          }
      }  
  }

   //New Art Grid

  function newArt(){
    $("#pixelCanvas").empty();
  }
  
// theme change

function changeTheme(color){
$("body").css('background-color',color);
}
