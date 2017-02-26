// Created by Anna Casey
// Last edited 2.25.17
// This program vizualizes the progress I've made in various books I'm reading and will hopefully encourage me to finish some of them

var table;

//In the preload function "table" is assigned the values from the BookProgress.csv
function preload () {
  table = loadTable("BookProgress.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 700);// This creates a canvas that is 800 wide by 700 high
  noStroke();// This eliminates the stroke around object
}

function draw() {
  background(255);// This sets the background color to white
  var rows = table.getRows();// Creates the "rows" array and assigns the rows in the table to it
  
  // This for loop will draw ellipses for each book in the table as well as their labels
  // Uses the var "r" and loops 16 times which is the number of rows in the table
    for (var r = 0; r < 17; r++) {
      //This if/else statement creates the interaction where the labels change when the mouse is pressed
      if (mouseIsPressed){
        var label = rows[r].get("remaining") + " pages remaining";//Assigns label the value of remaining pages in "remaining" column of table
      } else {
        var label = rows[r].get("book");//Assigns label the value of book titles in "book" column in table
      }
      
    var prog = rows[r].getNum("progress");// Creates the var "prog" and assigns it the percentage values contained in the "progress" column of the table
    var pages = rows[r].getNum("pages");// Creates the var "pages" and assigns it the total pages values contained in the "pages" column of the table
    var size = rows[r].getNum("completed") / 4 + 20;// Creates the var "size" and assigns it the # of pages completed values in the "completed" column of the table
    var x = map(pages, 250, 750, 70, width - 70);// Creates var "x" and assigns it the "pages" values and maps them to the scale of the page with 70 pixel margins
    var y = map(prog, 0, 1, height - 70,70);// Creates var "y" and assigns it the "prog" values and maps them to the scale of the page with 70 pixel margins
    
    textSize(12);// Sets the text size to 12
    fill(r * 2, r * 12, r * 24);// Assigns shades of blue to each book based on "r"
    ellipse(x, y, size);// Draws the ellipses for each book with the size var which is based on the number of pages read
    text(label, x + size/2, y + 5);// Calls the label var and draws the appropriate label next to each ellipse
  }
  
  //This section draws the labels that describe the visualization
  fill(136, 21, 168);// Sets color to purple
  textSize(16);// Sets text size to 16
  text("Total Pages in Book", 325, 690);// Labels x-axis
  text("200", 50, 690);// Min of x-axis
  text("700", 750, 690);// Max of x-axis
  text("Progress", 10, 350);// Labels y-axis
  text("0%", 10, 630);// Min of y-axis
  text("100%", 10, 70);// Max of y-axis
  text("Click mouse for pages remaining", 300, 15);// Labels the top and gives instruction for the interaction
}







