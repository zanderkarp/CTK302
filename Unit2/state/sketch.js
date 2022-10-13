let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
}

function draw() {

switch(state)
 {
  case 0:
    background("grey");
    text("If Ani is short for Anakin \n and Obi is short for Obi-Wan, \n what is Luke short for?", width/2, height/2);
    break;

  case 1:
    background("green");
    text("A stormtrooper", width/2, height/2);
    break;
 }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
