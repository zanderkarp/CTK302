let mic;
let vol = 0;
let approachingVol = 0;
let i1, i2;

// variables that you might want to tweak
let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 0.08; // how responsive do you want this? Higher numbers mean faster response.

function setup() {
  createCanvas(400, 400);

  i1 = loadImage("images/roadrunner.jpg");
  i2 = loadImage("images/coyote.jpg");

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("green");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // make a "gradual" easing variable that approaches the original vol
  approachingVol += (vol - approachingVol) * ease;

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nYell to help Road Runner get away from \n Wile E. Coyote! \nMy volume is " +
      vol.toFixed(3) +
      "\nApproaching Vol = " +
      approachingVol.toFixed(3),
    10,
    60
  );

  // this moves that first box
//  x = vol*200 ;
 x = map(vol, 0, theLoudestItGets, 0, width);
  image(i1, x, 200, 50, 50);

  // use y for your "gradual" variable!
  y = map(approachingVol, 0, theLoudestItGets, 0, width);
  image(i2, y, 270, 50, 50);


  // this maps z to between 0 and 3 so you can switch on it.
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  text("z = " + z, 300, 20);
  switch (z) {
    case 0:
      text("case 0", 100, 350);
      break;
    case 1:
      text("case 1", 100, 350);
      break;
    case 2:
      text("case 2", 100, 350);
      break;
    default:
      text("case 3", 100, 350);
      break;
  }
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
