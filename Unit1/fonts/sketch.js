let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/dragonfruit.ttf");
  f2 = loadFont("assets/satan.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("Hello there!", width/2, 100);

  textFont (f2, 24);
  text("I'm Zander", width/2, 200);
}
