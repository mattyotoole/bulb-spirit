//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(63,116,72); //an RGB color for the canvas' background
  //circle
  stroke(10,75,21) // an RGB color for the circle's border
  fill(119,215,34); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/5,height/2,40,40); // center of canvas, 20px dia
fill(247,240,30); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,40,40); // center of canvas, 20px dia 
  fill(249,181,15); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/1.3,height/2,40,40); // center of canvas, 20px dia 
}

