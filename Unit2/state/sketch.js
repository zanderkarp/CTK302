let state = 0;

function setup() {
  createCanvas(400, 400);
  
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("red");
      // text("case 0", 100, 100);
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          fill(0, this.g, 0);
          rect(i, j, 50, 20);
        }
      }
      break;

    case 1:
      background("blue");
     // text("case 1", 100, 100);
       for (let j = 0; j <= height; j += 80) {
        for (let i = 0; i <= width; i += 10) {
          fill(this.r, 0 , 0);
          circle(i, j, 50);
        }
      }
      break;

    case 2:
      background("green");
        for (let j = 0; j <= height; j += 100) {
        for (let i = 0; i <= width; i += 5) {
          fill(0, 0 , this.b);
          triangle(i, j, i+10, j+100, i+20, j+20);
        }
      }
      break;

    case 3:
      background("yellow");
      for (let j = 0; j <= height; j += 200) {
        for (let i = 0; i <= width; i += 200) {
          fill(this.r, 0 , this.b);
          arc(i, j, 200, 200, 80, PI + QUARTER_PI, OPEN);
        }
      }
      break;

    case 4:
      background("orange");
      for (let j = 0; j <= height; j += 50) {
        for (let i = 0; i <= width; i += 20) {
          fill(this.r, this.g , this.b);
           circle(i+j, j, i);
      }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
