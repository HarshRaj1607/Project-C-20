
var r = 0;
var g = 50;
var b=255;
var sphere;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1350,660);
//sphere.shapeColor = "yellow";

}


function draw(){
background(250,250,250)
  //sphere.x = World.mouseX;
  //sphere.y = World.mouseY;
 ellipse(mouseX,330,20,20);


  if(mouseX >= 0 && mouseX <= 400){
    background(50,10,150);
 }

 if(mouseX >= 400 && mouseX <= 800){
background(10,100,20)

 }

 if(mouseX >= 800 && mouseX <= 1350){
 background(50,250,250)

 }

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
drawSprites ();
}