let numberOfTouches ;
let i1, i2, i3, i4;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("images/onecat.jpeg");
  i2 = loadImage("images/twocat.jpeg");
  i3 = loadImage("images/redcat.jpg");
  i4 = loadImage("images/tom.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no cat", 5, 22) ; 
      break ;
      
     case 1: 
      text("One cat", 5, 22) ; 
      image(i1, 50, 50, 300, 350);
      break ;
      
      case 2:
      text("Two cat", 5, 22) ; 
      image(i2, 50, 50, 300, 350);
      break ;
      
      case 3:
      text("Red cat", 5, 22) ; 
      image(i3, 50, 50, 300, 350);
      break ;
    
      case 4:
      text("Blue cat", 5, 22) ; 
      image(i4, 50, 50, 300, 350);
      break ;
  }
  
}