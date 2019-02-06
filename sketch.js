var mySong;
var analyzer;
var img;
var myClary;
var myC;
var myL;
var myA;
var myR;
var myI;
var myN;
var myE;
var myT1;
var myT2;
var myO;

function preload(){
  // put preload code here
  mySong = loadSound("./assets/Capriccio.mp3");
  img = loadImage("./assets/sfondo_home.jpg");
  myClary = loadImage("./assets/Clarinetto.png");
  myC = loadImage("./assets/C_clari.png");
  myL = loadImage("./assets/L_clari.png");
  myA = loadImage("./assets/A_clari.png");
  myR = loadImage("./assets/R_clari.png");
  myI = loadImage("./assets/I_clari.png");
  myN = loadImage("./assets/N_clari.png");
  myE = loadImage("./assets/E_clari.png");
  myT1 = loadImage("./assets/T1_clari.png");
  myT2 = loadImage("./assets/T2_clari.png");
  myO = loadImage("./assets/O_clari.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //mySong.setVolume(0.5);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  //background
  backgroundImage(img);

 // imageMode(CENTER);
 image(myClary, width/2,height/7, myClary.width/7, myClary.height/7);


 //music
 var volume = 0;
if (mouseX > width/5) {
  if (mySong.isPlaying() == false) {
    mySong.play();
  }
  volume = analyzer.getLevel();
  volume = map(volume,0,1,0,height);
} else {
  mySong.stop();
}

 //title
 image(myC, width/12, height/3, myC.width/5+volume/4, myC.height/5+volume/4);
 image(myL, width/12, height/3, myC.width/5-volume/4, myC.height/5-volume/4);
 image(myA, width/12, height/3, myC.width/5+volume/4, myC.height/5+volume/4);
 image(myR, width/12, height/3, myC.width/5-volume/4, myC.height/5-volume/4);
 image(myI, width/12, height/3, myC.width/5+volume/4, myC.height/5+volume/4);
 image(myN, width/12, height/3, myC.width/5-volume/4, myC.height/5-volume/4);
 image(myE, width/12, height/3, myC.width/5+volume/4, myC.height/5+volume/4);
 image(myT1, width/12, height/3, myC.width/5-volume/4, myC.height/5-volume/4);
 image(myT2, width/12, height/3, myC.width/5+volume/4, myC.height/5+volume/4);
 image(myO, width/12, height/3, myC.width/5-volume/4, myC.height/5-volume/4);

 //penthagram
  push();
  for(var pos = 3*height/5; pos <= 3*height/5+90; pos+=20){
  stroke(255);
  strokeWeight(1);
  noFill();
  line(width/2-390,pos,width/2+480,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+150; pos+=20){
  line(width/2-390,pos,width/2-360,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+150; pos+=20){
  line(width/2-330,pos,width/2-300,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+130; pos+=20){
  line(width/2-270,pos,width/2-240,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+130; pos+=20){
  line(width/2+60,pos,width/2+30,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+110; pos+=20){
  line(width/2-150,pos,width/2-120,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+110; pos+=20){
  line(width/2+390,pos,width/2+420,pos);
  };

  //notes
  noStroke();
  fill(255);
  ellipseMode(CENTER);
  mi = ellipse(width/2-375,3*height/5+150,15); //-375
  fa = ellipse(width/2-315,3*height/5+140,15); //-315
  sol = ellipse(width/2-255,3*height/5+130,15); //-255
  la = ellipse(width/2+45,3*height/5+120,15); //-195
  si = ellipse(width/2-135,3*height/5+110,15); //-135
  donota = ellipse(width/2+405,3*height/5+100,15); //-75
  re = ellipse(width/2-15,3*height/5+90,15);
  ellipse(width/2-195,3*height/5+80,15);
  ellipse(width/2+225,3*height/5+70,15);
  ellipse(width/2+465,3*height/5+60,15);
  ellipse(width/2-75,3*height/5+50,15);
  ellipse(width/2+285,3*height/5+40,15);
  ellipse(width/2+345,3*height/5+30,15);
  ellipse(width/2+105,3*height/5+20,15);
  ellipse(width/2+165,3*height/5+10,15);

//changePage
  //text
  textSize(20);
  noStroke();
  textFont('Cutive Mono');
  textStyle(NORMAL);
  textAlign(LEFT);
  text ('Press S to START', width/2, height-100);
changePage();
}


function backgroundImage(img) {
  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  let scale = Math.max(width/img.width,height/img.height);
  image(img,0,0,img.width*scale,img.height*scale)
  pop();
}

function changePage() {
  if ((keyIsPressed == true) && (key == 's')) {
     window.location.href="dragAndDrop.html";}
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
