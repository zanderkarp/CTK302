let cars = [];
let frogPos;
let state = 0;
let timer = 0;

let i1, i2, i3, i4, i5, i6;

function setup() {
  createCanvas(700, 700);
  rectMode(CENTER);

  //load in assets
  i1 = loadImage("assets/mp3title.png");
  i2 = loadImage("assets/mp3win.png");
  i3 = loadImage("assets/mp3lose.png");
  i4 = loadImage("assets/gamebg.png");

  i5 = loadImage("assets/berry.png");
  i6 = loadImage("assets/marty.png");

  // Spawn objects

  for (let i = 0; i < 15; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: //menu screen
      image(i1, 0, 0);
      break;

    case 1: //game screen
      game();
      timer++;
      if (timer > 25*60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //win screen
      image(i2, 0, 0);
      break;

    case 3: //lose screen
      image(i3, 0, 0);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; //go to game
      break;
    case 2: //win state
      resetTheGame();
      state = 0;
      break;
    case 3: //lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  image(i4, 0, 0);

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    //collision detection
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  
if (cars.length <= 0) {
  timer = 0;
  state = 2;
}

  // add a "frog"
  image(i6, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  timer = 0;
    for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    // this.o = random(100);
    //this.size = random(20, 50);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    // fill(this.r, this.g, this.b, this.o);
    image(i5, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
