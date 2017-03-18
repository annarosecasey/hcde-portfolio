// Created by Anna Casey
// Lasted edited 3.17.17
// This program digitizes the painting Lake Superior c. 1923 by Lawren Harris

function setup() {
  createCanvas(750, 675); // This draws a canvas of simiilar dimensions to the painting
  noStroke(); // This eliminates the stroke around shapes
}

function draw() {
  background(70, 180, 186); // Sets the background color to a shade of teal
  cloudsBack(); // Calls the clouds behind the sun rays
  sunRaysBack(); // Calls the sun rays that fall behind the background hills
  hillsBack(); // Calls the background hills
  sunRaysFront(); // Calls the sun rays that fall into the water
  cloudsFront(); // Calls the clouds in front of the sun rays
  water(); // Calls the water
  mountainsFront(); // Calls the mountains in the foreground
  hillsFront(); // Calls the hills in the foreground
  islands(); // Calls the islands
}

// Draws the mountains in the foreground
function mountainsFront() {
  fill(39, 45, 15);
  triangle(-120, 675, 100, 555, 228, 675);
  triangle(215, 675, 356, 584, 356, 675);
  fill(50, 58, 19);
  triangle(0, 675, 215, 567, 215, 675);
  triangle(215, 675, 356, 605, 356, 667);
  fill(65, 76, 23);
  triangle(356, 675, 356, 584, 460, 675);
  fill(76, 89, 27);
  triangle(356, 675, 356, 605, 460, 675);
  fill(65, 76, 23);
  triangle(215, 675, 215, 567, 430, 675);
  fill(39, 45, 15);
  triangle(0, 675, 247, 584, 247, 675);
  fill(50, 58, 19);
  triangle(0, 675, 215, 610, 215, 675);
  fill(76, 89, 27);
  triangle(215, 675, 215, 610, 430, 675);
}

// Draws the hills in the foreground
function hillsFront() {
  fill(65, 76, 23);
  arc(753, 675, 150, 75, 3.14, 0.00);
  fill(50, 58, 19);
  arc(753, 685, 130, 70, 3.14, 0.00);
  fill(65, 76, 23);
  arc(560, 825, 500, 400, 3.14, 0.00);
  fill(50, 58, 19);
  arc(560, 765, 400, 250, 3.14, 0.00);

}

// Draws the water
function water() {
  fill(20, 102, 122);
  rect(0, 457, 800, 200);
  fill(214, 255, 248);
  ellipse(710, 515, 750, 60);
  ellipse(740, 475, 750, 50);
  fill(174, 249, 237);
  ellipse(700, 520, 350, 15);
  ellipse(690, 495, 270, 15);
  ellipse(690, 470, 230, 13);

}

// Draws the islands
function islands() {
  fill(112, 5, 50);
  arc(330, 480, 200, 350, 3.14, 0.00);
  arc(100, 520, 130, 250, 3.14, 0.00);
  arc(450, 510, 240, 100, 3.14, 0.00);
  fill(91, 3, 40);
  arc(320, 480, 190, 330, 3.14, 0.00);
  arc(430, 510, 250, 90, 3.14, 0.00);
  fill(63, 0, 27);
  arc(310, 480, 180, 300, 3.14, 0.00);
  arc(410, 510, 250, 80, 3.14, 0.00);
  arc(90, 520, 110, 230, 3.14, 0.00);
}

// Draws the sun rays that fall into the water
function sunRaysFront() {
  fill(247, 255, 221);
  /*  quad(320, 420, 412, 0, 480, 0, 442, 420);*/
  quad(490, 460, 510, 0, 560, 0, 580, 460);
  quad(620, 460, 590, 0, 640, 0, 700, 460);

}

// Draws the sun rays that fall behind the background hills
function sunRaysBack() {
  fill(247, 255, 221);
  quad(320, 420, 412, 0, 480, 0, 442, 420);
  fill(163, 255, 242);
  quad(100, 460, 250, 0, 320, 0, 190, 460);
}

// Draws the background hills
function hillsBack() {
  fill(163, 255, 242);
  arc(150, 465, 500, 200, 3.14, 0.00);
  fill(95, 148, 221);
  arc(150, 475, 500, 200, 3.14, 0.00);
  fill(13, 60, 124);
  arc(200, 475, 500, 150, 3.14, 0.00);
  arc(500, 475, 600, 150, 3.14, 0.00);

}

// Draws the clouds in front of the sun rays
function cloudsFront() {
  fill(188, 253, 255);
  ellipse(400, 0, 800, 100);
}

// Draws the clouds behind of the sun rays
function cloudsBack() {
  fill(188, 253, 255);
  ellipse(310, 205, 750, 60);
  fill(117, 183, 166);
  ellipse(700, 140, 250, 60);
  ellipse(450, 300, 500, 60);
  ellipse(150, 120, 250, 60);
}