// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let setting = 0;
let animState = 0;
let x = 0;
let windspeed = 0;
let c1, co1, co2, co3, f1, f2, f3, h1, h2, h3, hp1;
let timer = 0;

function setup() {
  createCanvas(700, 700);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Seattle,WA,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US

  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=08871cb73c5f97dae698c33a4f599649";

  let myTotalString = myCityString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.

  //images

  c1 = loadImage("assets/cloud.png");
  co1 = loadImage("assets/cold01.png");
  co2 = loadImage("assets/cold02.png");
  co3 = loadImage("assets/cold03.png");

  f1 = loadImage("assets/flag01.jpg");
  f2 = loadImage("assets/flag02.jpg");
  f3 = loadImage("assets/flag03.jpg");

  h1 = loadImage("assets/hot01.png");
  h2 = loadImage("assets/hot02.png");
  h3 = loadImage("assets/hot03.png");

  hp1 = loadImage("assets/mp4homepage.jpg");
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
}

function draw() {
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1: //homepage
      
    switch(setting) {
      case 0: //hp
        image(hp1, 0, 0);
        break;

      case 1: //wind
        if (windspeed >= 10) {
          switch(animState) {
            case 0:
              image(f1, 0, 0);
              timer++;
              if (timer > 1 * 60) {
                animState++;
                timer = 0;
              }
              break;
            case 1:
              image(f2, 0, 0);
              timer++;
              if (timer > 1 * 60) {
                animState++;
                timer = 0;
              }
              break;
            case 2:
              image(f3, 0, 0);
              timer++;
              if (timer > 1 * 60) {
                animState = 0;
                timer = 0;
              }
              break;
          }
        } else {
          switch(animState) {
            case 0:
              image(f1, 0, 0);
              timer++;
              if (timer > 3 * 60) {
                animState++;
                timer = 0;
              }
              break;
            case 1:
              image(f2, 0, 0);
              timer++;
              if (timer > 3 * 60) {
                animState++;
                timer = 0;
              }
              break;
            case 2:
              image(f3, 0, 0);
              timer++;
              if (timer > 3 * 60) {
                animState = 0;
                timer = 0;
              }
              break;
          }
        }

        break;

      case 2: //cup
      background("blue");
      if (temperature < 45) {
        switch(animState) {
          case 0:
            image(h1, 0, 0);
            timer++;
            if (timer > 1 * 60) {
              animState++;
              timer = 0;
            }
            break;
          case 1:
            image(h2, 0, 0);
            timer++;
            if (timer > 1 * 60) {
              animState++;
              timer = 0;
            }
            break;
          case 2:
            image(h3, 0, 0);
            timer++;
            if (timer > 1 * 60) {
              animState++;
              timer = 0;
            }
            break;
          case 3:
            animState = 0;
            timer = 0;
            break;
          
        }
      } else {
        switch(animState) {
          case 0:
            image(co1, 0, 0);
            timer++;
            if (timer > 1 * 60) {
              animState++;
              timer = 0;
            }
            break;
          case 1:
            image(co2, 0, 0);
            timer++;
            if (timer > 1 * 60) {
              animState++;
              timer = 0;
            }
            break;
          case 2:
            image(co3, 0, 0);
            timer++;
            if (timer > 1 * 60) {
              animState = 0;
              timer = 0;
            }
            break;
          
        }
      }

      if (humidity <= 50) {
        image(c1, 30, -30, 200, 200);
        image(c1, 300, 0, 400, 400);
      } else {
        image(c1, 30, -30, 200, 200);
        image(c1, 300, 0, 400, 400);
        image(c1, -30, 300, 250, 250);
        image(c1, 450, 450, 300, 300);
      }
      break;
    } 

      break;
  }
}

function mouseReleased() {
  setting++;
  if (setting > 2) {
    setting = 0;
  }
}
