let state = -1;
let s1, s2, s3;
let i1, i2, i3;

function preload() {
  i1 = loadImage("assets/dogguitar.jpg");
  i2 = loadImage("assets/catpiano.jpg");
  i3 = loadImage("assets/catband.png");

  s1 = loadSound("assets/happyrock.mp3");
  s2 = loadSound("assets/hipjazz.mp3");
  s3 = loadSound("assets/jazzyfrenchy.mp3");
}

function setup() {
  createCanvas(800, 800);
  textSize(32);
}

function draw() {

  background("#add8e6");
  
  switch (state) {

    case -1:
      text("Please click to begin", 100, 100);
      break;

    case 0:
      text("Now playing: 'Happy Rock'", 100, 100);
      image(i1, 100, 150, 500, 500);
      if (!s1.isPlaying()) {
        s1.play;
      }
      break;

    case 1:
      text("Now playing: 'Hip Jazz'", 100, 100);
      image(i2, 100, 150, 500, 500);
      if (!s2.isPlaying()) {
        s2.play;
      }
      break;

    case 2:
      text("Now playing: 'Jazzy Frenchy'", 100, 100);
      image(i3, 100, 150, 500, 500);
      if (!s3.isPlaying()) {
        s3.play;
      }
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}