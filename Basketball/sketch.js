// Created by Anna Casey
// Last edited February 11, 2017
// Basketball Game with Lebron Confetti

var basketball;
var lebron;
var lebronSize; // Because aspect ratio is 1:1 I only needed to make one variable for the image size
var aspectRatio = 1;
var x = 475;
var y = 350;

// This function preloads my two images
function preload() {
  basketball = loadImage("basketball.png");
  lebron = loadImage("LeBron_head.png");
}

function setup() {
  createCanvas(1000, 700); // This sets my canvas size to 1000 x 700 to resemble the dimensions of a basketball court
  strokeWeight(5); // Sets the stroke weight to 5 for the lines on the court
  court(); // This calls my court function
  image(basketball, x, y, 50, 50); // This calls the basketball image
}

function draw() {
  
  // Basketball "Game"
  if (keyIsPressed) {  // Sets up the actions for when a key is pressed
    court(); // This draws the court background
    image(basketball, x, y, 50, 50); // This calls the basketball image
    if (keyCode == UP_ARROW) { // Sets up the action for pressing the UP arrow
      y = max(0, y - 10); // Moves the basketball up 10 pixels at a time - stops at 0
    } else if (keyCode == DOWN_ARROW) { // Sets up the action for pressing the DOWN arrow
      y = min(y + 10, 650); // Moves the basketball down 10 pixels at a time - stops at 650
    } else if (keyCode == RIGHT_ARROW) { // Sets up the action for pressing the RIGHT arrow
      x = min(x + 10, 950); // Moves the basketball right 10 pixels at a time - stops at 950
    } else if (keyCode == LEFT_ARROW) { // Sets up the action for pressing the LEFT arrow
      x = max(0, x - 10); // Moves the basketball left 10 pixels at a time - stops at 0
    } else if (keyCode == 32) { // Sets up the action for pressing the SPACEBAR
       y = max(10, y - 10); // Moves the basketball up toward the basket by 10 everytime the spacebar is pressed until it reaches 10
      if (x > 475) { // Sets up the action if basketball is on the right side of the hoop
        x = max(475, x -10); // Moves the basketball LEFT toward the basket by 10 until it reaches 475
      } else if (x < 475) {  // Sets up the action if basketball is on the left side of the hoop
        x = min(x +10, 475); // Moves the basketball RIGHT toward the basket by 10 until it reaches 475
      }
    }
  }
    //LeBron Confetti
  if (x == 475 && y == 10) { // If the basketball is in the hoop (475, 10) then the screen will show images of LeBrons face
    lebronSize = random(1, 400); // This sets the size of the image of Lebrons face to a random number
    image(lebron, random(0, 975), random(0, 675), lebronSize, lebronSize); // This calls the image of LeBron and causes it to appear in random places at random sizes
    fill(255); // Sets the fill color to white
    textSize(45); // Sets the text size to 45
    text("Press arrows to clear", 300, 50); // Displays text for how to restart the "game"
    
  }
}

// This creates the background to look like a basketball court with a hoop
function court() {
  background(252, 233, 169);
  stroke(255);
  fill(122,66,244);
  arc(500, 0, 800, 1000, 0, PI, OPEN);
  arc(500, 350, 200, 150, 0, PI, OPEN);
  rect(400, 0, 200, 350);
  stroke(252, 151, 10);
  strokeWeight(5);
  ellipse(500, 35, 60);
  noStroke();
  textSize(12);
  fill(0);
  text("To Move Basketball Use Arrow Keys", 200, 690);
  text("To Shoot: Hold Spacebar", 650, 690)
}