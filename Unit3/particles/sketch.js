let cars = [];

function setup() {
  createCanvas(500, 500);

  // for (let i = 0; i < 20; i++) {
  // cars.push(new Car());
  // }
  noStroke();

}

function draw() {
  background(150);
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
    }
//WHALE
fill("black");
ellipse(width/2, height-10, 400, 100);
triangle(160, 370, 280, 450, 180, 450);
triangle(35, 440, 35, 505, 75, 505);
fill("white");
ellipse(340, 475, 100, 30);
triangle(144, 447, 180, 444, 185, 490);
fill("black");
circle(360, 475, 15, 15);
fill("white");
circle(365, 475, 5, 5);
fill("lightblue");
rect(0, 490, 500, 10);
fill("yellow");
circle(500, 20, 200, 200);

fill("black");
textSize(32);
text("Ollie the Orca\ncame up from\nhis home to say \nhello!", 40, 50);
}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(325, 435) ;  // initialize your attributes here
    this.vel = createVector(random(-.8, .8), random(-10,-5)) ;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = random(200, 255);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 30);
  }

  move() {
   this.pos.add(this.vel);
   this.a = this.a - 5;
  //  if (this.pos.x > width) this.pos.x = 0;
  //  if (this.pos.x < 0) this.pos.x = width;
  //  if (this.pos.y > height) this.pos.y = 0;
  //  if (this.pos.y < 0) this.pos.y = height;
  }
  
}
