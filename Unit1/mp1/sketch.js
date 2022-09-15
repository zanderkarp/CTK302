function setup() {
  createCanvas(500, 400);
  background(220);
}

function draw() {
  //Frame
  fill(102, 51, 0);
  rect(0,0,500,400);
  
  fill(220);
  stroke(0);
  rect(20,20, 460, 360);
  
  //Sign
  stroke(0);
  fill("yellow");
  rect(155,36,185,35);
  
  fill(0);
  text("EMPLOYEE OF THE MONTH", 165,55);
  
  
  //Head
  noStroke();
  fill("#ffedb2");
  square(209, 260, 70);
  
  fill("#ffedb2");
  circle(243,191,160);
  
  stroke(0);
  fill(255);
  square(189, 151, 45);
  
  fill(255);
  square(260, 151, 45);
  
  fill(0);
  rect(235,167,24,5);
  
  fill("#ffedb2");
  triangle(247, 178, 238, 205, 255, 205);
  
  noFill();
  arc(245, 219, 80, 40, TWO_PI, PI);
  
  //Body
  stroke(0);
  fill("lightblue");
  rect(195,300, 100, 79);
  
  fill("white");
  quad(160,298,200,298,200,379,146,379);
  
  fill("white");
  quad(285,298,320,298,345,379,285,379);
  
  //Hands
  noStroke();
  fill("#ffedb2");
  circle(105,268, 50);
  
  fill("#ffedb2");
  circle(380, 268, 50);
  
  //Arms
  stroke(0);
  fill("white");
  quad(85, 293, 129, 293, 146, 379, 100, 379);
  
  fill("white");
  quad(355, 293, 400, 293, 393, 379, 345,379);
  
  if (mouseIsPressed) {
    
  //Frame
  fill(0);
  rect(0,0,500,400);
    
  fill(25);
  stroke(0);
  rect(20,20, 460, 360);
    
  //Sign
  fill(0);
  rect(155,36,185,35);
  
  fill("red");
  text("VILLAIN OF A LIFETIME", 176,55);
    
    
  //Outline
  fill(0);
  square(209, 260, 70);
  
  fill(0);
  circle(243,191,160);
  
  fill("red");
  square(189, 151, 45);
  
  fill("red");
  square(260, 151, 45);
  
  fill(0);
  rect(235,167,24,5);
  
  fill(245);
  arc(245, 219, 80, 50, TWO_PI, PI);
    
  fill(0);
  rect(195,300, 100, 79);
  
  fill(0);
  quad(160,298,200,298,200,379,146,379);
  
  fill(0);
  quad(285,298,320,298,345,379,285,379);
    
  
  //Corn
  
  fill("yellow");
  ellipse(110,270,60,230);
    
  fill(0);
  line(109, 154, 109, 399);
  line(90, 181, 90, 399);
  line(127,180,127,399);
  line(89, 185, 130, 185);
  line(83, 215, 136, 215);
  line(80, 260, 139, 260);
  line(80, 290, 139, 290);
  line(82, 315, 136, 315);
  line(88, 350, 132, 350);
  line(97, 368, 124, 368);
  
  fill("green");
  triangle(86,332, 68, 363, 111, 399);
  triangle(134,333,155,358,111,399);
  
  fill("yellow");
  ellipse(380, 270, 60, 230);
    
   fill(0);
  line(379, 154, 379, 399);
  line(361, 181, 361, 399);
  line(398,180,398,399);
  line(359, 185, 401, 185);
  line(353, 215, 406, 215);
  line(349, 260, 409, 260);
  line(349, 290, 409, 290);
  line(352, 315, 408, 315);
  line(361, 350, 402, 350);
  line(369, 368, 398, 368);
  
  fill("green");
  triangle(354,332,335,363,378,399);
  triangle(404, 333, 424, 355, 378, 399);
    
  //Touch Up
  fill(0);
  rect(85, 380, 80, 80);
  rect(350, 380, 80, 80);
    
}
  
}