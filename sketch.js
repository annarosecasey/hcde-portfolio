function setup() {
  createCanvas(720, 480); //this sets the size of the window
  smooth(); //?
  strokeWeight(2); 
}
 
 function draw() {
   background(250); //this sets the color for the background and overwrites the previous positions of each move so you can't see them
   translate(mouseX, mouseY);
  // Neck
  stroke(186, 53, 226); //sets the color for lines below
  line(266, 257, 266, 162);
  line(276, 257, 276, 162);
  line(286, 257, 286, 162);

  // Antennae
  line(276, 155, 246, 112);
  line(276, 155, 306, 56);
  line(276, 155, 342, 170);
  
  // Body
  noStroke(); //eliminates default color above
  fill(102); //sets fill color for ellipse
  ellipse(264, 377, 66, 66); //defines location and size of ellipse 
  fill(93, 203, 236);
  rect(219, 257, 90, 120);
  fill(102);
  rect(219, 274, 90, 6);
  
  // Head
  fill(0);
  ellipse(276, 155, 90, 90);
  fill (93, 203, 36);
  ellipse(288, 150, 28, 28);
  fill(0);
  ellipse(288, 150, 6, 6);
  fill(153)
  ellipse(263, 148, 10, 10);
  ellipse(296, 130, 8, 8);
  ellipse(305, 162, 6,6);
}

