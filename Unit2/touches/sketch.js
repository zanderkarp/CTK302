let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
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
      // put a picture here
      break ;
      
      case 2:
      text("Two cat", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
     text("Red cat", 5, 22) ; 
            // put a picture here
      break ;
    
      case 4:
        text("Blue cat", 5, 22) ; 
               // put a picture here
         break ;
  }
  
}