// Created by Anna Casey
// Last edited 2.25.17
// This program vizualizes the progress I've made in various books I'm reading and will hopefully encourage me to finish some of them

var table;
var colors = 150;


//In the preload function "table" is assigned the values from the BookProgress.csv
function preload() {
  table = loadTable("BookProgress.csv", "csv", "header");
}

function setup() {
  createCanvas(1200, 700); // This creates a canvas that is 1200 wide by 700 high
  noStroke(); // This eliminates the stroke around object
  textFont("Helvetica"); // This sets the font to Helvetica
}

function draw() {
  background(255); // This sets the background color to white
  dots(); // This calls the dots function that draws the data points
  labels(); // This calls the labels function that draws the labels and axis
}

// This draws the dots where x is pages remaining, y is progress as a percentage
// and the size of the dot is based on the total number of pages in the book
function dots() {

  var rows = table.getRows(); // Creates the "rows" array and assigns the rows in the table to it
  // This for loop will draw ellipses for each book in the table as well as their labels
  // Uses the var "r" and loops 16 times which is the number of rows in the table
  for (var r = 0; r < rows.length; r++) {
    var prog = rows[r].getNum("progress"); // Creates the var "prog" and assigns it the percentage values contained in the "progress" column of the table
    var remain = rows[r].getNum("remaining"); // Creates the var "remain" and assigns it the total pages values contained in the "pages" column of the table
    var size = rows[r].getNum("pages") / 15 + 15; // Creates the var "size" and assigns it the # of pages completed values in the "completed" column of the table
    var x = map(remain, 0, 400, 90, width - 150); // Creates var "x" and assigns it the "pages" values and maps them to the scale of the page with 70 pixel margins
    var y = map(prog, 100, 0, 70, height - 80); // Creates var "y" and assigns it the "prog" values and maps them to the scale of the page with 70 pixel margins

    textSize(16); // Sets the text size to 12
    fill(30, 225 - r * 10, r * 5 + 230); // Assigns shades of blue to each book based on "r"
    ellipse(x, y, size); // Draws the ellipses for each book with the size var which is based on the number of pages read
    if (x - size / 2 < mouseX && mouseX < x + size / 2 && y - size / 2 < mouseY && mouseY < y + size / 2) {
      fill(255);
      var pagesRemain = rows[r].get("remaining");
      textAlign(CENTER);
      text(pagesRemain, x, y + 5);
      var names = rows[r].get("book");
    } else {
      var names = rows[r].get("book");
    }
    
    if (mouseIsPressed) {
      var names = rows[r].get("author");
    }
    
    fill(30, 230 - r * 10, r * 5 + 200); // Assigns shades of blue/green to each book based on "r"
    textAlign(LEFT);
    text(names, x + size / 2, y + 5, 175); // Calls the label var and draws the appropriate label next to each ellipse
  }
}


//This section draws the labels that describe the visualization
function labels() {
  strokeWeight(5);
  stroke(100);
  line(60, 650, 1105, 650);
  line(60, 650, 60, 70);
  noStroke();
  fill(100); // Sets color to purple
  textSize(20); // Sets text size to 16
  text("PAGES REMAINING", 500, 680); // Labels x-axis
  text("PROGRESS", 10, 40); // Labels y-axis
  textSize(12);
  textAlign(RIGHT);
  text("Hover for number of pages remaining", 1100, 50);
  text("Click for author names", 1100, 70);
}