// Created by Anna Casey
// Last edited 2/4/17
// This robot has moving eyes and jumps up and down

var page = 0
var eyeDirX = 0
var eyeDirY = 0
var jumpVal = 400
var jumpDir = 2

function setup() {
  createCanvas(700,800);// Sets canvas size
  rectMode(CENTER);// Places coordinates for rectangles at the center rather than corner
}

//Draws the Robot
function draw() {
  background(104, 237, 228);// The background is a teal color
  fill(0);
  noStroke();
  text(mouseX, 50, 30, 30, 30);
  text(mouseY, 100, 30, 30, 30);
  strokeWeight(20); // Sets the thickness of the border
  stroke(90); // Sets the border color to black 
  robot(350, jumpVal); // Calls the robot
  // This if statement makes the robots eyes move back and forth at the start and every other click
  if (page == 0) {
    jumpVal = 400 //This resets its position back to start
    // This section of code makes him go cross-eyed when mouse position X is between 184 & 229
    if (316 < mouseX && 386 > mouseX) { 
      fill(104, 237, 228);
      ellipse(310, jumpVal - 200, 50);
      ellipse(390, jumpVal - 200, 30);
      fill(90);
      ellipse(320, jumpVal - 200, 25);
      ellipse(380, jumpVal - 200, 10);
    } else if (mouseY < 171) {
    eyeDirY = max(-8, eyeDirY - 1) 
    } else if (325 > mouseX) { // This section makes it look left when the mouse position X is < 134
      eyeDirX = max(-10, eyeDirX - 1)
    } else if (375 < mouseX) { // This section makes it look right when the mouse position X is > 255
      eyeDirX = min(10, eyeDirX + 1)
    }
  // This makes the robot jump up and down after the mouse is clicked and every other click that proceeds
  } 
  else {
    jumpVal = jumpDir + jumpVal;
    if (jumpVal > 400 || jumpVal < 280) {
    jumpDir = jumpDir * -1
    }
  }
}

// This allows the switch between eyes moving back and forth and jumping up and down
function mousePressed () {
  page = 1 - page
 }
 
// Brings all the parts of the robot together into one function
function robot(x, y) {
  legs (x, y);
  body (x, y);
  head (x, y);
}

// Creates the body
function body (x, y) {
    stroke(90);
    fill(190);
    ellipse(x, y, 300);
    rect(x, y - 155, 50, 15)
    fill(90);
    ellipse(x, y, 200);
}

//Creates the head including the eyes
function head (x, y) {
  fill(190);
  rect(x, y - 200, 180, 80, 15);
  rect(x - 95, y - 200, 10, 20, 3);
  rect(x + 95, y - 200, 10, 20, 3);
  line(x - 60, y - 240, x - 60, y - 280);
  eyes(x, y);
}

//Creates the eyes
function eyes (x, y) {
  fill(104, 237, 228);
  ellipse(x - 40, y - 200, 50);
  ellipse(x + 40, y - 200, 30);
  fill(90);
  ellipse(x + eyeDirX - 40, y + eyeDirY - 200, 25);
  ellipse(x + eyeDirX + 40, y + eyeDirY - 200, 10);
}

//Creates the legs
function legs (x, y) {
  stroke(90);
  strokeWeight(5);
  line(x - 50, y + 140, x - 50, y + 200);
  line(x + 50, y + 140, x + 50, y + 200);
  rect(x - 65, y + 215, 75, 25, 7);
  rect(x + 65, y + 215, 75, 25, 7);
}
