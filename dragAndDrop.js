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

var myImageArrow;
var myImageArrowBg;

var mysong;

var radius = 80;

var arrow;
var arrowBg;


var bell;
var bellbg;
var lower;
var lowerbg;
 var barrel;
 var barrelbg;
 var upper;
 var upperbg;

 var mouth;
 var mouthbg;



function preload(){

  mySong = loadSound("./assets/clarinet.song2.mp3");

  myImageArrow = loadImage("./assets/Frecciatraccia.png");
 myImageArrowBg = loadImage("./assets/Freccia.png");

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


  bell = {x: width*0.2, y: height*0.2, active: false};
   bellbg = {x:width*0.8+53, y:height*0.8-10};

   lower = {x:width*0.5, y: height*0.2, active:false};
   lowerbg = {x:width*0.6+65, y:height*0.8};

   barrel = {x:width*0.8, y: height*0.2, active:false}
   barrelbg = {x:width*0.2+36, y:height*0.8};

   upper = {x:width*0.3, y: height*0.4, active:false}
   upperbg = {x:width*0.4+18, y:height*0.8};

 mouth = {x:width*0.7, y: height*0.4, active:false}
   mouthbg = {x:width*0.1+40, y:height*0.8};

    arrow = {x:width*0.9+20, y:height*0.1, active: false};
    arrowBg = {x:width*0.9+20, y:height*0.2};


  mySong.play();
}

function draw() {


  background(0);

  imageMode(CENTER);

  image(myImageArrowBg, arrowBg.x, arrowBg.y, myImageArrowBg.width/6, myImageArrowBg.height/6);
image(myImageArrow, arrow.x, arrow.y, myImageArrow.width/6, myImageArrow.height/6);

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

  distance = dist(mouseX, mouseY, arrow.x, arrow.y);
  if (distance < radius) {
    arrow.active = true;
  } else {
    arrow.active = false;
  }


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

  if (arrow.active && isInCircle(arrow, arrowBg, radius)) {
          arrow.x = arrowBg.x;
          arrow.y = arrowBg.y;
          changePage();
      }

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
      }

  return false;
}

function mouseDragged() {

  if (arrow.active) {
  arrow.x = mouseX;
  arrow.y = mouseY;
  }


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
