// Variable declaration

let dropper = false;
let points = [];
let pointsList = [];
let colorSelected = "#FFA500";

// Default grid
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

// MakeGrid() Function

function makeGrid() {
    //Empty Grid 
      
    $("#pixelCanvas").empty();

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
  
//Colorpicker from ColorGrid

function setColor(color){
    colorSelected = color;
}

//Eraser function

function eraser(){
    colorSelected = "";
}

$("#colorPicker").on("change", ()=>{
    setColor($("#colorPicker").val());
});

//Select color input
  
$( "#pixelCanvas" ).on( "click", "td", function( event ) {
if(dropper){
    dropper = false;
    colorSelected = $(this).css("background-color");
    return;
}

$(this).css("background-color", colorSelected);
    points.push({
        axis: $(this).attr('id'),
        color: colorSelected
    });
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
        points.push({
            axis: $(this).attr('id'),
            color: colorSelected
        });
    }
});
  
//Reset Grid
  
function resetGrid(){
    const height = $("#inputHeight").val();
    const weight = $("#inputWidth").val();
   
    for(let i=0;i<height;i++){
        for(let j=0;j<weight;j++){
            $(`#${i}_${j}`).css("background-color",'');
        }
    }  
}

//New Art Grid

function newArt(){
$("#pixelCanvas").empty();
}

// Theme change

function changeTheme(color){
    $("body").removeClass("bg");
    $("body").css('background-color',color);
}

// Add original theme

function addBackground(){
    $("body").addClass("bg");
}

// Save Pixel Art

function downloadGrid(){
    setTimeout(()=>{
        html2canvas(document.querySelector("#pixelCanvas")).then(canvas => {
        canvas.toBlob(function(blob){ saveAs(blob,"pic.png"); });
        });
    },0);
}

// Dropper function

function selectColor(){
    dropper = true;
}

// Play Pixel Art

function play(){
    resetGrid();
    for(let i in points){
        setTimeout( function() {
            $(`#${points[i].axis}`).css("background-color", points[i].color);
        }, 50*i);

    }
}

function clearGrid(){
    points = [];
    resetGrid();
}


