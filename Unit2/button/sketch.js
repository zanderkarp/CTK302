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
    text("I was walking down the street \n where the houses were numbered \n 64k, 128k, 512k, and 1MB", width/2, height/2);
    break;

  case 1:
    background("orange");
    text("That was a trip down memory lane", width/2, height/2);
    break;
 }

 rect(100,100,100,100);
}

function mouseReleased() {

  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100 && (mouseY < 200))) {
  state++;
  if (state > 1) {
    state = 0;
  }
}
}
