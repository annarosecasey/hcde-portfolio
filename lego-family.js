// Anna Casey
// 1.27.17
// Assignment 2 - Lego family
// "The Incredibles"
// Characters will move from the center to the
// middle of the screen and stop

// These variables set the starting point for each of the 
// character functions and make it possible for them to move
var d = 0;
var e = 0;
var f = 75;
var g = 0;
var h = 0;
var i = 305;
var j = 650;
var k = 0;
var l = 655;
var m = 400;


function setup() {
  createCanvas (700, 700); // This sets the canvas size to 700 px by 700 px
  noStroke(); // This eliminates the default stroke that outlines shapes
}

function draw() {
  background (255); // This sets the background to white and resets it every time draw runs
  jack(d, e, 50); // This runs the code under the function for Jack-Jack
  helen(f, g, 65); // This runs the code under the function for Helen
  bob(h, i, 120); // This runs the code under the function for Bob
  dash(j, k, 50); // This runs the code under the function for Dash
  violet(l, m, 45); // This runs the code under the function for Violet
  
// These define the min or max values for the variables that allow the characters to move  
  d = min(d + .5, 185);
  e = min(e + 1, 465);
  f = min(f + .5, 260);
  g = min(g + .5, 255);
  h = min(h + 1.5, 350);
  i = max(i - .5, 180);
  j = max(j - 1, 495);
  k = min(k + 1, 325);
  l = max(l - .5, 570);
  m = max(m - .5, 275);
}

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


function dash(a, b, c) {
  // black boots
  fill (0);
  rect (a, b + 200, c, c);
  // red suit
  fill (255, 0 , 0);
  rect (a, b + 90, c, c + 65);
  // belt
  fill (255, 170, 0);
  rect (a, b + 160, c, c - 40);
  // logo
  fill (0);
  stroke (255, 170, 0);
  strokeWeight (2);
  ellipse (a + 25, b + 132, c - 26, c - 16);
  noStroke ();
  fill (255, 233, 0);
  ellipse (a + 25, b + 122, c - 44, c - 44);
  rect (a + 22, b + 128, c - 44, c - 34);
  // face
  fill (249, 218, 197);
  rect (a, b + 35, c, c + 10);
  // eyemask
  fill (0);
  rect (a, b + 45, c, c - 42);
  // blonde hair
  fill (249, 215, 62);
  rect (a, b, c, c - 15);
}


function violet(a, b, c) {
  // black boots
  fill (0);
  rect (a, b + 200, c, c + 55);
  // red suit
  fill (255, 0 , 0);
  rect (a, b + 90, c, c + 65);
  // belt
  fill (255, 170, 0);
  rect (a, b + 160, c, c - 35);
  // logo
  fill (0);
  stroke (255, 170, 0);
  strokeWeight (2);
  ellipse (a + 22.5, b + 132, c - 21, c - 9)
  noStroke ();
  fill (255, 233, 0);
  ellipse (a + 22.5, b + 122, c - 38.5, c - 38.5);
  rect (a + 19.5, b + 128, c - 39, c - 29);
  // face
  fill (249, 218, 197);
  rect (a, b + 20, c, c + 25);
  // eyemask
  fill (0);
  rect (a, b + 40, c, c - 37);
  // black hair
  fill (0);
  rect (a, b, c, c - 15);
}
