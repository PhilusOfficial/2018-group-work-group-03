var mi;
var fa;
var donota;
var sol;
var la;
var si;
var re;
var mi2;
var fa2;
var sol2;
var la2;
let a = 0.0;
let s = 0.0;

function preload(){
  mymi = loadSound("./assets/MI_E.mp3");
  myfa = loadSound("./assets/FA_F.mp3");
  mysol = loadSound("./assets/SOL_G.mp3");
  myla = loadSound("./assets/LA_A.mp3");
  mysi = loadSound("./assets/SI_B.mp3");
  mydo = loadSound("./assets/DO_C.mp3");
  myre = loadSound("./assets/RE_D.mp3");
  mymi2 = loadSound("./assets/MI2.mp3");
  myfa2 = loadSound("./assets/FA2.mp3");
  mysol2 = loadSound("./assets/SOL2.mp3");
  myla2 = loadSound("./assets/LA2.mp3");
  myImagemi = loadImage("./assets/Mi.png");
  myImagefa = loadImage("./assets/Fa.png");
  myImagesol = loadImage("./assets/Sol.png");
  myImagela = loadImage("./assets/La.png");
  myImagesi = loadImage("./assets/Si.png");
  myImagedo = loadImage("./assets/Do.png");
  myImagere = loadImage("./assets/Re.png");
  myImagemi2 = loadImage("./assets/Mi2.png");
  myImagela2 = loadImage("./assets/La2.png");
  myImagefront = loadImage("./assets/Front.png");
  myImageback = loadImage("./assets/Back.png");
  myImageback2 = loadImage("./assets/Backpressed.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
}

var iterator = 0;

function draw() {
  background(0);
  stroke(255);

  //clarinet front and back
  image(myImagefront, width/7, height/11, 0.7*myImagefront.width, 0.7*myImagefront.height);
  image(myImageback, 2*width/7, height/11, 0.7*myImageback.width, 0.7*myImageback.height);

  //text
  textSize(20);
  noStroke();
  fill(255);
  textFont('Cutive Mono');
  textStyle(NORMAL);
  textAlign(LEFT);
  text('Use your keyboard to play some music', width/2, height/5);
  text('Press N for next page', 0.75*width,0.1*height);
  var w = textWidth("A,S,D,F,G,H,J,K,L,O,P");
  rect(width/2, height/4-14, w, 25);
  fill(0);
  text('A,S,D,F,G,H,J,K,L,O,P', width/2, height/4);
  //notes
  fill(255);
  textAlign(CENTER);
  text('Mi', width/2+15,3*height/5+200);
  text('Fa', width/2+75,3*height/5+200);
  text('Sol', width/2+130,3*height/5+200);
  text('La', width/2+195,3*height/5+200);
  text('Si', width/2+255,3*height/5+200);
  text('Do', width/2+315,3*height/5+200);
  text('Re', width/2+375,3*height/5+200);
  text('Mi', width/2+435,3*height/5+200);
  text('Fa', width/2+495,3*height/5+200);
  text('Sol', width/2+555,3*height/5+200);
  text('La', width/2+615,3*height/5+200);

//pentagram
  push();
  for(var pos = 3*height/5; pos <= 3*height/5+90; pos+=20){
  stroke(255);
  strokeWeight(1);
  noFill();
  line(width/2,pos,width/2+630,pos);
  };

  for(var pos = 3*height/5+100; pos <= 3*height/5+150; pos+=20){
  line(width/2,pos,width/2+30,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+150; pos+=20){
    line(width/2+60,pos,width/2+90,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+130; pos+=20){
    line(width/2+120,pos,width/2+150,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+130; pos+=20){
    line(width/2+180,pos,width/2+210,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+110; pos+=20){
    line(width/2+240,pos,width/2+270,pos);
  };
  for(var pos = 3*height/5+100; pos <= 3*height/5+110; pos+=20){
    line(width/2+300,pos,width/2+330,pos);
  };
  pop();

  push();
  noStroke();
  fill(255);
  ellipseMode(CENTER);
  // for(var pos = 3*height/5; pos <= 3*height/5+150; pos+=20){
  //   for(i= width/2+15; i<= width/2+750; i+=60 ){
  //     ellipse(i,pos,15)
  //  }
  // };

  mi = ellipse(width/2+15,3*height/5+150,15);
  fa = ellipse(width/2+75,3*height/5+140,15);
  sol = ellipse(width/2+135,3*height/5+130,15);
  la = ellipse(width/2+195,3*height/5+120,15);
  si = ellipse(width/2+255,3*height/5+110,15);
  donota = ellipse(width/2+315,3*height/5+100,15);
  re = ellipse(width/2+375,3*height/5+90,15);
  mi2 = ellipse(width/2+435,3*height/5+80,15);
  fa2 = ellipse(width/2+495,3*height/5+70,15);
  sol2 = ellipse(width/2+555,3*height/5+60,15);
  la2 = ellipse(width/2+615,3*height/5+50,15);

  pop();
  push()
  a = a + 0.04;
  s = cos(a) * 2;
  fill('#EBCA60');
  noStroke();
  if ((keyIsPressed == true) && (key == 'a')) {
  mymi.play();
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagemi, width/7, height/11, 0.7*myImagemi.width, 0.7*myImagemi.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  mi = ellipse(width/2+15,3*height/5+150,15);

  }
  else if ((keyIsPressed == true) && (key == 's')) {
  myfa.play();
  mymi.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagefa, width/7, height/11, 0.7*myImagefa.width, 0.7*myImagefa.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  fa = ellipse(width/2+75,3*height/5+140,15);
  }
  else if ((keyIsPressed == true) && (key == 'd')) {
  mysol.play();
  myfa.fade(0.5, 0.1);
  mymi.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagesol, width/7, height/11, 0.7*myImagesol.width, 0.7*myImagesol.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  sol = ellipse(width/2+135,3*height/5+130,15);
  }
  else if ((keyIsPressed == true) && (key == 'f')) {
  myla.play();
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  mymi.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagela, width/7, height/11, 0.7*myImagela.width, 0.7*myImagela.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  la = ellipse(width/2+195,3*height/5+120,15);
  }
  else if ((keyIsPressed == true) && (key == 'g')) {
  mysi.play();
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mymi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagesi, width/7, height/11, 0.7*myImagesi.width, 0.7*myImagesi.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  si = ellipse(width/2+255,3*height/5+110,15);
    }
  else if ((keyIsPressed == true) && (key == 'h')) {
  mydo.play();
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mymi.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagedo, width/7, height/11, 0.7*myImagedo.width, 0.7*myImagedo.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  donota = ellipse(width/2+315,3*height/5+100,15);
  }
  else if ((keyIsPressed == true) && (key == 'j')) {
  myre.play();
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  mymi.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagere, width/7, height/11, 0.7*myImagere.width, 0.7*myImagere.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  re = ellipse(width/2+375,3*height/5+90,15);
  }
  else if ((keyIsPressed == true) && (key == 'k')) {
  mymi2.play();
  mymi.fade(0.5, 0.1);
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImagemi2, width/7, height/11, 0.7*myImagemi.width, 0.7*myImagemi.height);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  mi2 = ellipse(width/2+435,3*height/5+80,15);
  }
  else if ((keyIsPressed == true) && (key == 'l')) {
  myfa2.play();
  mymi.fade(0.5, 0.1);
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  image(myImageback2, 2*width/7, height/11, 0.7*myImageback2.width, 0.7*myImageback2.height);
  fa2 = ellipse(width/2+495,3*height/5+70,15);
  }
  else if ((keyIsPressed == true) && (key == 'o')) {
  mysol2.play();
  mymi.fade(0.5, 0.1);
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  myla2.fade(0.5, 0.1);
  sol2 = ellipse(width/2+555,3*height/5+60,15);
  }
  else if ((keyIsPressed == true) && (key == 'p')) {
  myla2.play();
  mymi.fade(0.5, 0.1);
  myfa.fade(0.5, 0.1);
  mysol.fade(0.5, 0.1);
  myla.fade(0.5, 0.1);
  mysi.fade(0.5, 0.1);
  mydo.fade(0.5, 0.1);
  myre.fade(0.5, 0.1);
  myfa2.fade(0.5, 0.1);
  mysol2.fade(0.5, 0.1);
  mymi2.fade(0.5, 0.1);
  image(myImagela2, width/7, height/11, 0.7*myImagela.width, 0.7*myImagela.height);
  la2 = ellipse(width/2+615,3*height/5+50,15);
  }
changePage();
}

function changePage() {
  if ((keyIsPressed == true) && (key == 'n')) {
     window.location.href="rotation.html";}
}


function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
