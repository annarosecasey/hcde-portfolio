// Created by Anna Casey
// Last edited February 11, 2017
// Space scene with floating astronaut and orbiting moon
var earth;
var astro;
var astroWidth = 1829;
var aspectRatioAstro = 2346 / 1829;
var earthWidth = 1538;
var aspectRatioEarth = 1538 / 1540;
var moonWidth = 613;
var aspectRatioMoon = 613 / 641;
var x = 0;
var y = 700;

// The preloads all of the images and assigns them to variables
function preload() {
  astro = loadImage("Astronaut.png")
  earth = loadImage("Earth.png")
  moon = loadImage("moon.png")
  
}

function setup() {
  createCanvas(1200, 800); // This sets the canvas to 1200 x 800
  imageMode(CENTER); // This sets the image center as the location

}

function draw() {
  background(0); // Background is black like space
  textSize(12); // Sets text size to 12
  fill(255); // text color is white
  text("hold mouse to play", 550, 25); // Display text and location
  image(earth, 600, 400, 300, 300 * aspectRatioEarth); // This calls the earth image and puts it in the center of the canvas
  image(astro, x, y, 200, 200 * aspectRatioAstro); // This calls the astronaut and sets him in the lower left corner
  if (mouseIsPressed) { // This sets up for actions when the mouse is pressed
    x = x + 1; // This causes the x unit to increase by one everytime mouse is pressed
    y = y - 1; // This causes the y unit to decrease by one everytime mouse is pressed
    translate(600, 400); // This displaces the image below so that it rotates around the earth
    rotate(radians(frameCount * 1 % 360)); // This sets the rotation rate and radians
    image(moon, 300, 300, 200, 200 * aspectRatioMoon); // This is the image of the moon that orbits around the earth
  }
}
