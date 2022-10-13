let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5, i6, i7, i8, i9, i10;

function setup() {
  createCanvas(600, 500);
  background("purple"); 
  fill("white");
  rect(50, 50, 500, 400);
  textAlign(CENTER);
  i1 = loadImage("images/c3.jpeg");
  i2 = loadImage("images/c2.jpeg");

  i3 = loadImage("images/ad1.jpeg");
  i4 = loadImage("images/ad2.jpeg");

  i5 = loadImage("images/h1.jpeg");
  i6= loadImage("images/h2.jpeg");

  i7 = loadImage("images/ash1.jpeg");
  i8 = loadImage("images/ash2.jpeg");

  i9 = loadImage("images/catHuh.jpeg");
  i10 = loadImage("images/catBye.jpeg");
}

function draw() {

switch(state)
 {
  case 0: //welcome
  fill("white");
  rect(50, 50, 500, 400);
    fill("black");
    text("Cats I Know Being \n Weird Lil Dudes", 300, 100);
    textSize(24)
    text("A short saga by Zander", 300, 175);
    text("(Timer active, no need to click)", 300, 200);
    image (i9, 200, 230, 200, 200);
    break;

  case 1: //clark
  fill("white");
  rect(50, 50, 500, 400);
  fill("black");
    text("Clark", 300, 90);
    image(i1, 100, 100, 200, 350);
    image(i2, 300, 100, 200, 350);
    break;
  case 2: //addison
  fill("white");
  rect(50, 50, 500, 400);
  fill("black");
    text("Addison", 300, 90);
    image(i3, 100, 100, 200, 350);
    image(i4, 300, 100, 200, 350);
    break;

  case 3: //hailey
  fill("white");
  rect(50, 50, 500, 400);
  fill("black");
  text("Hailey", 300, 90);
    image(i5, 100, 100, 200, 350);
    image(i6, 300, 100, 200, 350);
    break;

  case 4: //ash
  fill("white");
  rect(50, 50, 500, 400);
  fill("black");
  text("Ashton Kutcher", 300, 90);
    image(i7, 100, 100, 200, 350);
    image(i8, 300, 100, 200, 350);
    break;

  case 5: //clap
  fill("white");
  rect(50, 50, 500, 400);
  fill("black");
  text("Thank you! Click to restart", 300, 100);
   image (i10, 100, 150, 400, 290);
    break;
 }

 if (state < 5) {}
 timer++;
 if (timer > 5*60) {
  timer = 0;
  state++;
  }
 }
 if (state == 5 && mouseIsPressed) {
  state = 0;
  timer = 0;
}
 


