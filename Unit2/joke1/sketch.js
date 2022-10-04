let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

switch(state)
 {
  case 0:
    background("grey");
    text("hi", width/2, height/2);
    break;

  case 1:
    backround("blue");
    text();
    break;
 }
}

function mouseReleased {
  state++;
  if (state > 1) {
    state = 0;
  }
}
