var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorRGB = document.getElementById("colorRGB");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var numberOfSquares = 6;


easyButton.addEventListener("click",function(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numberOfSquares = 3;
  colors=generateRandomColor(numSquares);
  pickedColor=pickColor();
  //change color in heading
  colorRGB.textContent=pickColor();

    for(var i = 0; i<squares.length; i++){
      if(colors[i]){
        squares[i].style.backgroundColor=colors[i];
      }
      else{
        squares[i].style.display="none";
      }
    }
    

})


hardButton.addEventListener("click",function(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors=generateRandomColor(numSquares);
  pickedColor=pickColor();
  //change color in heading
  colorRGB.textContent=pickColor();

    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})

resetButton.addEventListener("click",function(){
  h1.style.backgroundColor="transparent";
  //generate all new colors
  colors=generateRandomColor(numSquares);
  //change color display to match picked color
  pickedColor=pickColor();
    //change color in heading
  colorRGB.textContent=pickColor();
  //change color of squares
  for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
  }
})

colorRGB.textContent=pickedColor;


for(var i = 0; i < squares.length; i++){
    //add initial colors
   squares[i].style.backgroundColor=colors[i];

   //add click listeners
   squares[i].addEventListener("click",function(){
       //grab color of clicked square & compare
     var clickedColor = this.style.backgroundColor;
     if(clickedColor===pickedColor){
         message.textContent="Correct";
         changeColors(clickedColor);
         h1.style.backgroundColor=pickedColor;
         resetButton.textContent="Play Again?";
     }
    else{
        this.style.backgroundColor="#232323";
        message.textContent="WRONG";
    } 
   })
}

//matches all squares with correct colour
function changeColors(color){
//loop through squares and matches the color
    for(var i =0; i <squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

//picks a random color from the colours array
function pickColor(){
  var random= Math.floor(Math.random()*colors.length);

  return colors[random];
}

//creates an array with num elements
function generateRandomColor(num){

        //make an array
        var arr=[];
        //add num random colors
        for(var i = 0;i<num;i++){
           arr.push(randomColor());

        }
        //return array
        return arr;
};


//3 random rgb numbers
function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}