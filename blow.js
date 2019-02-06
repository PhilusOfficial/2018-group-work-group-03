var mic;
var analyzer;
var mouth3;
var fa2;
var volume;
//arrow
var xSize;
var ySize;
var ax;
var ay;
var imageSize = 20;
var overBox = false;
var locked = false;
var xOffset = 0.0;
var yOffset = 0.0;
var volume;




function preload(){
  mymouth3 = loadImage("./assets/mouth1.png");
  myfa2 = loadSound("./assets/FA2.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
    ax = width*0.95;
    ay = height*0.9;
    rectMode(RADIUS);
    noStroke();
    noFill();
  //Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  background(0);
  push();
  //text
  textSize(20);
  noStroke();
  fill(255);
  textFont('Courier');
  textStyle(NORMAL);
  textAlign(LEFT);
  text('Embouchure is how you hold the clarinet in your mouth between your lips and how you blow into the instrument. You take the clarinet into your mouth with the reed on lower lips, the mouthpiece touching the upper teeth.', width/8, height*0.2,600,200);
  text('For a better experience.....headphones', width/8, height*0.9);
  var w = textWidth("Blow to play the clarinet!");
  rect(width/8, height*0.5, w+width/8, 15);
  fill(0);
  text('Blow to play the clarinet!', width/8, height*0.5);
  pop();
  noFill();
  volume = mic.getLevel();

  imageMode(CENTER);
  imgmouth3= image(mymouth3, 3*width/4, height/2, mymouth3.width, mymouth3.height);

  // Test if the cursor is over the arrow
  if (mouseX > ax-imageSize && mouseX < ax+imageSize &&
      mouseY > ay-imageSize && mouseY < ay+imageSize) {
    overBox = true;
  } else {
    overBox = false;
  }

  if (volume >0.1) {
    myfa2.play();
      }
//volume microphone
  push();
  stroke('#EBCA60');
  strokeWeight(2);
  fill('#EBCA60');
  for(var pos = height/4; pos <= 3*height/5; pos+=30){
  rect(3*width/4,pos+height/2*volume*5,2,5);
  };
  pop();


    // Draw the image 3
    stroke(255);
    rect(ax, ay, imageSize, imageSize);
}

function mousePressed() {
if(overBox) {
  locked = true;
    changePage();
} else {
  locked = false;
}
xOffset = mouseX-ax;
yOffset = mouseY-ay;
}

function mouseReleased() {
locked = false;
}

function changePage() {window.location.href="lastPage.html";}

function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
