let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
}

function draw() {

switch(state)
 {
  case 0:
    background('grey');
    text("What genre are national anthems?", width/2, height/2);
    break;

  case 1:
    background("blue");
    text("Country", width/2, height/2);
    break;
 }

 timer++;
 if (timer > 4*60) {
  timer = 0;
  state++;
  if (state > 1) {
    state = 0;
  }
 }
}