// Anna Casey
// 1.27.17
// Assignment 2 - Lego family
// "The Incredibles"
// Characters will move from the center to the
// middle of the screen and stop

// These variables set the starting point for each of the 
// character functions and make it possible for them to move
var jackX = 0;
var jackY = 0;
var helenX = 75;
var helenY = 0;
var bobX = 0;
var bobY = 405;
var dashX = 750;
var dashY = 0;
var violetX = 755;
var violetY = 500;


function setup() {
  createCanvas (800, 800); // This sets the canvas size to 700 px by 700 px
  noStroke(); // This eliminates the default stroke that outlines shapes
}

function draw() {
  background (255); // This sets the background to white and resets it every time draw runs
  jack(jackX, jackY, 50); // This runs the code under the function for Jack-Jack
  helen(helenX, helenY, 65); // This runs the code under the function for Helen
  bob(bobX, bobY, 120); // This runs the code under the function for Bob
  dash(dashX, dashY, 50); // This runs the code under the function for Dash
  violet(violetX, violetY, 45); // This runs the code under the function for Violet
  
  // Movement for Jack
  jackX = min(jackX + .5, 185);
  jackY = min(jackY + 1, 465);
  
  //Movement for Helen
  helenX = min(helenX + .5, 260);
  helenY = min(helenY + .5, 255);
  
  //Movement for Bob
  bobX = min(bobX + 1.5, 350);
  bobY = max(bobY - .5, 180);
  
  //Movement for Dash
  dashX = max(dashX - 1, 495);
  dashY = min(dashY + 1, 325);
  
  //Movement for Violet
  violetX = max(violetX - .5, 570);
  violetY = max(violetY - .5, 275);
}

// This code builds Jack-Jack by stacking rectangles of various colors and heights
function jack(a, b, c) {
  // red suit
  fill (255, 0 , 0);
  rect (a, b + 60, c, c);
  // face
  fill (249, 218, 197);
  rect (a, b + 10, c, c);
  // eyemask
  fill (0);
  rect (a, b + 25, c, c - 42);
  // red hair
  fill (249, 145, 62);
  rect (a + 15, b, c - 30, c - 40);
  
}

// This code builds Helen by stacking rectangles of various colors and heights - Logo is made with ellipses and a rectangle
function helen(a, b, c) {
  // black boots
  fill (0);
  rect (a, b + 220, c, c + 35);
  // red suit
  fill (255, 0 , 0);
  rect (a, b + 105, c, c + 50);
  // belt
  fill (255, 170, 0);
  rect (a, b + 180, c, c - 55);
  // logo
  fill (0);
  stroke (255, 170, 0);
  strokeWeight (2);
  ellipse (a + 32.5, b + 137, c - 43, c - 30);
  noStroke ();
  fill (255, 233, 0);
  ellipse (a + 32.5, b + 126, c - 58, c - 58);
  rect (a + 28.75, b + 133, c - 58, c - 49);
  // face
  fill (249, 218, 197);
  rect (a, b + 40, c, c);
  // eyemask
  fill (0);
  rect (a, b + 55, c, c - 55);
  // brown hair
  fill (142, 70, 15);
  rect (a, b, c, c - 25);
  
}

// This code builds Bob by stacking rectangles of various colors and heights - Logo is made with ellipses and a rectangle
function bob(a, b, c) {
  fill (0);
  rect (a, b + 325, c, c - 50);
  // red suit
  fill (255, 0 , 0);
  rect (a, b + 95, c, c + 110);
  // belt
  fill (255, 170, 0);
  rect (a, b + 285, c, c - 110);
  // logo
  fill (0);
  stroke (255, 170, 0);
  strokeWeight (2);
  ellipse (a + 60, b + 165, c - 93, c - 77);
  noStroke ();
  fill (255, 233, 0);
  ellipse (a + 60, b + 152, c - 112, c - 112);
  rect (a + 56, b + 160, c - 112, c - 100);
  // face
  fill (249, 218, 197);
  rect (a, b + 10, c, c - 30);
  // eyemask
  fill (0);
  rect (a, b + 30, c, c - 110);
  // blonde hair
  fill (249, 215, 62);
  rect (a, b, c, c - 110);
}

// This code builds Dash by stacking rectangles of various colors and heights - Logo is made with ellipses and a rectangle
function dash(x, y, size) {
  // black boots
  fill (0);
  rect (x, y + 200, size, size);
  // red suit
  fill (255, 0 , 0);
  rect (x, y + 90, size, size + 65);
  // belt
  fill (255, 170, 0);
  rect (x, y + 160, size, size - 40);
  // logo
  fill (0);
  stroke (255, 170, 0);
  strokeWeight (2);
  ellipse (x + 25, y + 132, size - 26, size - 16);
  noStroke ();
  fill (255, 233, 0);
  ellipse (x + 25, y + 122, size - 44, size - 44);
  rect (x + 22, y + 128, size - 44, size - 34);
  // face
  fill (249, 218, 197);
  rect (x, y + 35, size, size + 10);
  // eyemask
  fill (0);
  rect (x, y + 45, size, size - 42);
  // blonde hair
  fill (249, 215, 62);
  rect (x, y, size, size - 15);
}

// This code builds Violet by stacking rectangles of various colors and heights - Logo is made with ellipses and a rectangle
function violet(x, y, size) {
  // black boots
  fill (0);
  rect (x, y + 200, size, size + 55);
  // red suit
  fill (255, 0 , 0);
  rect (x, y + 90, size, size + 65);
  // belt
  fill (255, 170, 0);
  rect (x, y + 160, size, size - 35);
  // logo
  fill (0);
  stroke (255, 170, 0);
  strokeWeight (2);
  ellipse (x + 22.5, y + 132, size - 21, size - 9)
  noStroke ();
  fill (255, 233, 0);
  ellipse (x + 22.5, y + 122, size - 38.5, size - 38.5);
  rect (x + 19.5, y + 128, size - 39, size - 29);
  // face
  fill (249, 218, 197);
  rect (x, y + 20, size, size + 25);
  // eyemask
  fill (0);
  rect (x, y + 40, size, size - 37);
  // black hair
  fill (0);
  rect (x, y, size, size - 15);
}
