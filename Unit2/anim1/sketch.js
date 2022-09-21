let x = 1100;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/dragonfruit.ttf");
  textAlign(CENTER);
}

function draw() {
background("red");
textFont(f1, 60);
text("Jesus christ, it's Jason Bourne!", x, 200);
x -= 5;
if(x < -600) {
  x = 1100;
}
}
