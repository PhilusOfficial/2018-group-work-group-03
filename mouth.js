var mic;
var analyzer;
var mouth1;
var mouth2;
var mouth3;
var error1;
var error2;
var fa2;
//image 1
var xSize;
var ySize;
var ax;
var ay;
var imageSizex = 75;
var imageSizey = 200;
var overBox = false;
var locked = false;
var xOffset = 0.0;
var yOffset = 0.0;
//image 2
var xSize2;
var ySize2;
var ax2;
var ay2;
var overBox2 = false;
var locked2 = false;
var xOffset2 = 0.0;
var yOffset2 = 0.0;
//image 3
var xSize3;
var ySize3;
var ax3;
var ay3;
var overBox3 = false;
var locked3 = false;
var xOffset3 = 0.0;
var yOffset3 = 0.0;
var volume




function preload(){
  mymouth1 = loadImage("./assets/mouth1.png");
  mymouth2 = loadImage("./assets/mouth2.png");
  mymouth3 = loadImage("./assets/mouth3.png");
  myerror1 = loadSound("./assets/error1.mp3");
  myerror2 = loadSound("./assets/error2.mp3");
  myfa2 = loadSound("./assets/FA2.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
    ax = width/4;
    ay = height/2.5;
    ax2 = 2*width/4;
    ay2 = height/2.5;
    ax3 = 3*width/4;
    ay3 = height/2.5;
    rectMode(RADIUS);
    noStroke();
    noFill();
  //Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
volume = mic.getLevel();
  background(0);

  push();
  //text
  textSize(20);
  noStroke();
  fill(255);
  textFont('Courier');
  textStyle(NORMAL);
  textAlign(CENTER);
  text('There is a specific mouth position to play the clarinet', width/2, height*0.8);
  var w = textWidth("Find it!");
  rect(width/2, height*0.9, w-40, 15);
  fill(0);
  text('Find it!', width/2, height*0.9);
  pop();

  imageMode(CENTER);
  imgmouth1 = image(mymouth3, width/4, height/2.5, 0.8*mymouth1.width, 0.8*mymouth1.height);
  imgmouth2= image(mymouth2, 2*width/4, height/2.5, 0.8*mymouth2.width, 0.8*mymouth2.height);
  imgmouth3= image(mymouth1, 3*width/4, height/2.5, 0.8*mymouth3.width, 0.8*mymouth3.height);

  // Test if the cursor is over the image 1
  if (mouseX > ax-imageSizex && mouseX < ax+imageSizex &&
      mouseY > ay-imageSizey && mouseY < ay+imageSizey) {
    overBox = true;
  } else {
    overBox = false;
  }

  // Test if the cursor is over the image 2
  if (mouseX > ax2-imageSizex && mouseX < ax2+imageSizex &&
      mouseY > ay2-imageSizey && mouseY < ay2+imageSizey) {
    overBox2 = true;
  } else {
    overBox2 = false;
  }

  // Test if the cursor is over the image 3
  if (mouseX > ax3-imageSizex && mouseX < ax3+imageSizex &&
      mouseY > ay3-imageSizey && mouseY < ay3+imageSizey) {
    overBox3 = true;
  } else {
    overBox3 = false;
  }

//   // Draw the image1
//   rect(ax, ay, imageSizex, imageSizey,100);
//   // Draw the image 2
//   rect(ax2, ay2, imageSizex, imageSizey,100);
//   // Draw the image 3
//   rect(ax3, ay3, imageSizex, imageSizey,100);
}

function mousePressed() {
  if(overBox) {
    locked = true;
      myerror2.play();
  } else {
    locked = false;
  }
  xOffset = mouseX-ax;
  yOffset = mouseY-ay;

  if(overBox2) {
    locked2 = true;
      myerror1.play();
  } else {
    locked2 = false;
  }
  xOffset2 = mouseX-ax2;
  yOffset2 = mouseY-ay2;

  if(overBox3) {
    locked2 = true;
    changePage();
  } else {
    locked3 = false;
  }
  xOffset3 = mouseX-ax3;
  yOffset3 = mouseY-ay3;
}

function mouseReleased() {
  locked = false;
  locked2 = false;
  locked3 = false;
}

  function changePage() {window.location.href="blow.html";}

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  }
