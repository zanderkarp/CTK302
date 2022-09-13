let epic;

function preload() {
  epic = loadSound("assets/epic.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  epic.play();
}

function draw() {
  background("black");
  fill("white");
  text("The name of the song is Epic and I like it because \n it sounds like it belongs in an action movie.", 10, 10, 400, 400);
}

function mouseReleased() {
  if (epic.isPlaying)() { 
    epic.pause();
  } else {
    epic.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
