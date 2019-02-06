var myImageBell;
var myImageUpper;
var myImageLower;
var myImageBarrel;
var myImageMouth;
var myImageBg1;
var myImageBg2;
var myImageBg3;
var myImageBg4;
var myImageBg5;

var mysong;

var radius = 80;

var bell = {x: 180, y: 100, active: false};
var bellbg = {x:1159, y:542};

var lower = {x:580, y:100, active:false};
var lowerbg = {x:916, y:551};

var barrel = {x:980, y:100, active:false};
var barrelbg = {x:375, y:551};

var upper = {x:350, y:250, active:false};
var upperbg = {x:613, y:550};

var mouth = {x:750, y:250, active:false};
var mouthbg = {x:250, y:550};


function preload(){

  mySong = loadSound("./assets/clarinet.song2.mp3");

 myImageBg1 = loadImage("./assets/bg1.png");
 myImageBg2 = loadImage("./assets/bg2.png");
 myImageBg3 = loadImage("./assets/bg3.png");
 myImageBg4 = loadImage("./assets/bg4.png");
 myImageBg5 = loadImage("./assets/bg5.png");
 myImageMouth = loadImage("./assets/mouthpiece.png");
 myImageBarrel = loadImage("./assets/barrel.png");
 myImageUpper = loadImage("./assets/upperJoint.png");
 myImageLower = loadImage("./assets/lowerJoint.png");
 myImageBell = loadImage("./assets/bell.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  mySong.play();
}

function draw() {

  background('black');

  imageMode(CENTER);
  image(myImageBg1, mouthbg.x, mouthbg.y, myImageBg1.width/4, myImageBg1.height/4);
  image(myImageBg2, barrelbg.x, barrelbg.y, myImageBg2.width/4, myImageBg2.height/4);
  image(myImageBg3, upperbg.x, upperbg.y, myImageBg3.width/4, myImageBg3.height/4);
  image(myImageBg4, lowerbg.x, lowerbg.y, myImageBg4.width/4, myImageBg4.height/4);
  image(myImageBg5, bellbg.x, bellbg.y, myImageBg5.width/4, myImageBg5.height/4);
  image(myImageBell, bell.x, bell.y, myImageBell.width/4, myImageBell.height/4);
  image(myImageLower, lower.x, lower.y, myImageLower.width/4, myImageLower.height/4);
  image(myImageBarrel, barrel.x, barrel.y, myImageBarrel.width/4, myImageBarrel.height/4);
  image(myImageUpper, upper.x, upper.y, myImageUpper.width/4, myImageUpper.height/4);
  image(myImageMouth, mouth.x, mouth.y, myImageMouth.width/4, myImageMouth.height/4);


push();
   fill(255);
   rect(width/8, height/1.8+7,430,20);

   textSize(20);
   noStroke();
   fill(0);
   textFont('Cutive Mono');
   textAlign(LEFT);
   text('Put all pieces in the correct order', width/8, height/1.7);
pop();

//mouse
push();
   fill(255);
   ellipse(mouseX,mouseY,10);
   noFill();
   stroke('light blue');
   ellipse(mouseX,mouseY,14);
pop();

}


function mousePressed() {

			distance = dist(mouseX, mouseY, bell.x, bell.y);
			if (distance < radius) {
				bell.active = true;
	} else {
				bell.active = false;
	}

distance = dist(mouseX, mouseY, lower.x, lower.y);
  if (distance < radius) {
    lower.active = true;
} else {
    lower.active = false;
}

distance = dist(mouseX, mouseY, barrel.x, barrel.y);
  if (distance < radius) {
    barrel.active = true;
} else {
    barrel.active = false;
}

distance = dist(mouseX, mouseY, upper.x, upper.y);
  if (distance < radius) {
    upper.active = true;
} else {
    upper.active = false;
}

distance = dist(mouseX, mouseY, mouth.x, mouth.y);
  if (distance < radius) {
    mouth.active = true;
} else {
    mouth.active = false;
}

return false;
}

function isInCircle(movingPart, staticPart, radius) {
  var xDistance = movingPart.x - staticPart.x;
  var yDistance = movingPart.y - staticPart.y;

  return xDistance*xDistance + yDistance*yDistance <= radius*radius;
}

function mouseReleased() {

  if (bell.active && isInCircle(bell, bellbg, radius)) {
            bell.x = bellbg.x - 1;
            bell.y = bellbg.y;
        }

  if (lower.active && isInCircle(lower, lowerbg, radius)) {
            lower.x = lowerbg.x - 14;
            lower.y = lowerbg.y - 12.5;
        }

  if (barrel.active && isInCircle(barrel, barrelbg, radius)) {
            barrel.x = barrelbg.x + 7;
            barrel.y = barrelbg.y - 8;
       }

  if (upper.active && isInCircle(upper, upperbg, radius)) {
            upper.x = upperbg.x + 44;
            upper.y = upperbg.y;
       }

   if (mouth.active && isInCircle(mouth, mouthbg, radius)) {
              mouth.x = mouthbg.x;
              mouth.y = mouthbg.y - 7.5;
              changePage()
      }

  return false;
}

function mouseDragged() {

if (bell.active) {
	bell.x = mouseX;
	bell.y = mouseY;
			}

if (lower.active) {
  lower.x = mouseX;
  lower.y = mouseY;
}

if (barrel.active) {
  barrel.x = mouseX;
  barrel.y = mouseY;
}

if (upper.active) {
  upper.x = mouseX;
  upper.y = mouseY;
}

if (mouth.active) {
  mouth.x = mouseX;
  mouth.y = mouseY;
}

return false;
}

function changePage() {
     window.location.href="page3.html";
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
