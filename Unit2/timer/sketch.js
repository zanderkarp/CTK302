let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  i1 = loadImage("images/outside.jpeg");
  i2 = loadImage("images/window.jpeg");
  i3 = loadImage("images/bruce.jpeg");
  i4 = loadImage("images/basketball.jpeg");
  i5 = loadImage("images/poster.jpeg");
}

function draw() {

switch(state)
 {
  case 0:
    background("#c300ea");
    textSize(24);
    text("Bruce the Goose \n An short anthology from my freshman year \n by Zander", width/2, 100);
    image(i3, 100, 200, 300, 300);

    timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 1;
      }
    break;

  case 1:
    background("#50e3c2");
    text("Background on Bruce the Goose", width/2, 75);
    image(i5, 100, 90, 300, 425);

    timer++;
      if (timer > 8 * 60) {
        timer = 0;
        state = 2;
      }
    break;

  case 2:
    background("#50e3c2");
    text("Homecoming 2020: \n One of the many times Bruce tried to follow \n me into Hewett-Manchester", width/2, 50);
    image(i1, 25, 125, 200, 375);
    image(i2, 275, 125, 200, 375);

    timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 3;
      }
      break;

  case 3:
    background("#7ed321");
    text("Bruce the Goose playing basketball", width/2, 100);
    image(i4, 100, 150, 300, 300);

    timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;
 }
}