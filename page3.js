
//var mySong;

var i = 0;
var num = 1;
var mySong;
var col = 255

function preload(){
  // put preload code here
  myData = loadJSON('./assets/clarinetParts.json');
  myImageback = loadImage("./assets/background.png");
  myImagebackOne = loadImage("./assets/backgroundOne.png");
  myImagebackTwo = loadImage("./assets/backgroundTwo.png");
  myImagebackThree = loadImage("./assets/backgroundThree.png");
  myImagebackFour = loadImage("./assets/backgroundFour.png");
  myImagebackFive = loadImage("./assets/backgroundFive.png");
  myImagebackblur = loadImage("./assets/backgroundBlur.png");
  mySong = loadSound("./assets/mySong.mp3");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  noStroke();

  textSize(20);
  textFont('Cutive Mono');


}

function draw() {
  // put drawing code here
  background(0);
  noFill();
  stroke(0);

  textSize(15);
  fill(255)


  //music
  var volume = 0;
  if (mouseX > width/5) {
   if (mySong.isPlaying() == false) {
     mySong.play();
   }
 }


  //backimage
  imageMode(CENTER);

  image(myImageback, width/5, height/1.9, myImageback.width/7, myImageback.height/7);


  //movement
if (mouseX > width/3.8 && mouseX < width/2.7 && mouseY > height/7.4 && mouseY < height/6.2){
    image(myImagebackOne, width/5, height/1.9, myImageback.width/7, myImageback.height/7);
    text(myData.clarinetParts[0].title, width/2, height/4-20);
    text(myData.clarinetParts[0].text, width/2, height/4, 370, 470);
  }
   else if (mouseX > width/3.8 && mouseX < width/3 && mouseY > height/4.8 && mouseY < height/4.1) {
    image(myImagebackTwo, width/5, height/1.9, myImageback.width/7, myImageback.height/7);
    text(myData.clarinetParts[1].title, width/2, height/4-20);
    text(myData.clarinetParts[1].text,width/2, height/4, 370, 470);
  }
     else if (mouseX > width/3.8 && mouseX <  width/2.6 && mouseY > height/2.2 && mouseY < height/2.1) {
    image(myImagebackThree, width/5, height/1.9, myImageback.width/7, myImageback.height/7);
    text(myData.clarinetParts[2].title, width/2, height/4-20);
    text(myData.clarinetParts[2].text, width/2, height/4, 370, 470);
  }
    else if (mouseX > width/3.8 && mouseX <  width/2.6 && mouseY > height/1.4-10 && mouseY < height/1.4+15) {
    image(myImagebackFour, width/5, height/1.9, myImageback.width/7, myImageback.height/7);
    text(myData.clarinetParts[3].title,  width/2, height/4-20);
    text(myData.clarinetParts[3].text, width/2, height/4, 370, 470);
  }
    else if (mouseX > width/3.8 && mouseX <  width/3.2 && mouseY > height/1.1-5 && mouseY < height/1.1+15) {
    image(myImagebackFive, width/5, height/1.9, myImageback.width/7, myImageback.height/7);
    text(myData.clarinetParts[4].title,  width/2, height/4-20);
    text(myData.clarinetParts[4].text, width/2, height/4, 370, 470);
}
    else if (mouseX > 0.8*width && mouseX <  2*width && mouseY > 0.9*height && mouseY < 2*height) {

    // text(myData.clarinetParts[5].title, 0.8*width, 0.9*height);
    changePage()
}


push();
fill(col);
rect(width/3.7-3, height/6.4-16,130,20);
rect(width/3.7-3, height/4.1-18,80,20);
rect(width/3.7-3, height/2.1-17,140,20);
rect(width/3.7-3, height/1.4-4,140,20);
rect(width/3.7-3, height/1.1-4,60,20);
rect(0.8*width-3, 0.9*height-16,115,20);

//text
 textSize(20);
 noStroke();
 fill(0);
 textFont('Cutive Mono');
 textAlign(LEFT);
 text('Mouthpiece', width/3.7, height/6.5);
 text('Barrel', width/3.7, height/4.2);
 text('Upper Joint', width/3.7, height/2.2+13);
 text('Lower Joint', width/3.7, height/1.4+12);
 text('Bell', width/3.7, height/1.1+12);
 text('Next Page', 0.8*width, 0.9*height);

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

function changePage() {
     window.location.href="keyboard.html";
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
