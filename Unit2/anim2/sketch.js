let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  push();
  translate(x, 0);
  avatar();
  x += 5;
  if (x > width) {
    x = -200;
  }
  pop();
}

function avatar() {
  fill("yellow");
  ellipse(110,270,60,230);
    
  fill(0);
  line(109, 154, 109, 385);
  line(90, 182, 90, 380);
  line(127,178,127,380);
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
}