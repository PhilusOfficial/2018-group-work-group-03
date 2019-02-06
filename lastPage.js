//width/2+15, width/2+75 135, 195, 255, 315, 375, 435, 495, 555, 615

var index = 0;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
}

var iterator = 0;

function draw() {
  background(0);
  stroke(255);


    //graphic shapes
    if ((keyIsPressed == true) && (key == 'a')) {
    //circles
    ellipseMode(CENTER);
    noFill();
    stroke('#EBCA60');
    strokeWeight(3);
    ellipse(0.25*width, height/2, random()*320);
    //circles2
    strokeWeight(1.5);
    ellipse(0.25*width, height/2, random()*100);
    }
    else if ((keyIsPressed == true) && (key == 's')) {
    push();
    strokeWeight(random(2,4));
    stroke('#EBCA60');
    noFill();
    translate(0.35*width, height/3);
    rotate(frameCount*5);
    ellipse(40,75, random()*30, random()*15);
    rotate(frameCount*-4);
    strokeWeight(random(1,3));
    ellipse(15,40, random()*20, random()*8);
    pop()
    }
  else if ((keyIsPressed == true) && (key == 'k')) {
    push();
    stroke('#EBCA60');
    strokeWeight(0.8);
    noFill();
    translate(width*0.2, height*0.5);
    scale(s);
    rotate(frameCount/20);
    polygon(0, 0, 60, 3);
    rotate(frameCount/-20);
    polygon(0, 0, 60, 3);
    rotate(frameCount/50);
    polygon(0, 0, 60, 3);
    pop();
    }
    if ((keyIsPressed == true) && (key == 'h')) {
    //square
    push();
    translate(0.15*width, height/3);
    rotate(s);
    scale(s*3);
    noFill();
    stroke('#EBCA60');
    strokeWeight(0.4);
    rectMode(CENTER);
    rect(0, 0, 50, 50);
    rotate(s);
    strokeWeight(0.3);
    rect(0, 0, 20, 20);
    rotate(s*0.5);
    strokeWeight(0.1);
    rect(0, 0, 10, 10);
    pop();
    }
    else if ((keyIsPressed == true) && (key == 'j')) {
      push();
      stroke('#EBCA60');
      strokeWeight(2);
      noFill();
      ellipse(0.3*width, 3*height/5, random()*70)
      translate(0.3*width, 3*height/5);
      strokeWeight(3);
      rotate(frameCount);
      scale(s*0.5);
      var x = sin(frameCount/150)*100;
      line(0, 0, 0, x);
      line(0, 0, -x, 0);
      line(0, 0, 0, -x);
      line(0, 0, x, 0);
      pop();
    }
      else if ((keyIsPressed == true) && (key == 'l')) {
        push();
        stroke('#EBCA60');
        strokeWeight(0.8);
        noFill();
        translate(width*0.3, height*0.7);
        scale(s*0.6);
        rotate(frameCount/50);
        polygon(0, 0, 80, 10);
        scale(s*0.5);
        rotate(frameCount/55);
        polygon(0, 0, 60, 10);
        pop();
      }

  //text
  textSize(20);
  noStroke();
  fill(255);
  textFont('Cutive Mono');
  textAlign(LEFT);
  text('Follow the tune', width/2, height/10);
  push();
  translate(0,-height*0.4-50);
  fill(255);
  textAlign(CENTER);
  text('H', width/2+15,3*height/5+150);
  text('H', width/2+75,3*height/5+150);
  text('A', width/2+130,3*height/5+150);
  text('A', width/2+195,3*height/5+150);
  text('S', width/2+255,3*height/5+150);
  text('S', width/2+315,3*height/5+150);
  text('A', width/2+375,3*height/5+150);
  text('L', width/2+435,3*height/5+150);
  text('L', width/2+495,3*height/5+150);
  text('K', width/2+555,3*height/5+150);
  text('K', width/2+615,3*height/5+150);
  pop();

  push();
  translate(0,-height*0.1-50);
  fill(255);
  textAlign(CENTER);
  text('J', width/2+15,3*height/5+150);
  text('J', width/2+75,3*height/5+150);
  text('H', width/2+130,3*height/5+150);
  text('A', width/2+195,3*height/5+150);
  text('A', width/2+255,3*height/5+150);
  text('L', width/2+315,3*height/5+150);
  text('L', width/2+375,3*height/5+150);
  text('K', width/2+435,3*height/5+150);
  text('K', width/2+495,3*height/5+150);
  text('J', width/2+555,3*height/5+150);
  pop();

  push();
  translate(0,height*0.2-50);
  fill(255);
  textAlign(CENTER);
  text('A', width/2+15,3*height/5+150);
  text('A', width/2+75,3*height/5+150);
  text('L', width/2+130,3*height/5+150);
  text('L', width/2+195,3*height/5+150);
  text('K', width/2+255,3*height/5+150);
  text('K', width/2+315,3*height/5+150);
  text('J', width/2+375,3*height/5+150);
  text('H', width/2+435,3*height/5+150);
  text('H', width/2+495,3*height/5+150);
  text('A', width/2+555,3*height/5+150);
  text('A', width/2+615,3*height/5+150);
  pop();

  //pentagram
    push();
    translate(0,-height*0.4-50);
    for(var pos = 3*height/5; pos <= 3*height/5+90; pos+=20){
    stroke(255);
    strokeWeight(1);
    noFill();
    line(width/2,pos,width/2+630,pos);
    };
    for(var pos = 3*height/5+100; pos <= 3*height/5+100; pos+=20){
    line(width/2,pos,width/2+30,pos);
    };
    for(var pos = 3*height/5+100; pos <= 3*height/5+100; pos+=20){
    line(width/2+60,pos,width/2+90,pos);
    };
    pop();

    push();
    translate(0, -height*0.1-50 );
    for(var pos = 3*height/5; pos <= 3*height/5+90; pos+=20){
    stroke(255);
    strokeWeight(1);
    noFill();
    line(width/2,pos,width/2+630,pos);
    };
    for(var pos = 3*height/5+100; pos <= 3*height/5+100; pos+=20){
    line(width/2,pos,width/2+30,pos);
    };
    for(var pos = 3*height/5+100; pos <= 3*height/5+100; pos+=20){
    line(width/2+60,pos,width/2+90,pos);
    };
    pop();

    push();
    translate(0, height*0.2-50 );
    for(var pos = 3*height/5; pos <= 3*height/5+90; pos+=20){
    stroke(255);
    strokeWeight(1);
    noFill();
    line(width/2,pos,width/2+630,pos);
    };
    for(var pos = 3*height/5+100; pos <= 3*height/5+100; pos+=20){
    line(width/2,pos,width/2+30,pos);
    };
    for(var pos = 3*height/5+100; pos <= 3*height/5+100; pos+=20){
    line(width/2+60,pos,width/2+90,pos);
    };
    pop();


    push();
    translate(0,-height*0.4-50);
    //notes
    noStroke();
    fill(255);
    ellipseMode(CENTER);

    // TUNE TWINKLE 1
    donota = ellipse(width/2+15,3*height/5+100,15);
    donota = ellipse(width/2+75,3*height/5+100,15);
    sol2 = ellipse(width/2+135,3*height/5+60,15);
    sol2 = ellipse(width/2+195,3*height/5+60,15);

    la2 = ellipse(width/2+255,3*height/5+50,15);
    la2 = ellipse(width/2+315,3*height/5+50,15);
    sol2 = ellipse(width/2+375,3*height/5+60,15);

    fa2 = ellipse(width/2+435,3*height/5+70,15);
    fa2 = ellipse(width/2+495,3*height/5+70,15);
    mi2 = ellipse(width/2+555,3*height/5+80,15);
    mi2 = ellipse(width/2+615,3*height/5+80,15);
    pop();

  push();
  translate(0, -height*0.1-50 );
  //notes
  noStroke();
  fill(255);
  ellipseMode(CENTER);

  // TUNE TWINKLE 2
  re = ellipse(width/2+15,3*height/5+90,15);
  re = ellipse(width/2+75,3*height/5+90,15);
  donota = ellipse(width/2+135,3*height/5+100,15);
  sol2 = ellipse(width/2+195,3*height/5+60,15);
  sol2 = ellipse(width/2+255,3*height/5+60,15);
  fa2 = ellipse(width/2+315,3*height/5+70,15);
  fa2 = ellipse(width/2+375,3*height/5+70,15);

  mi2 = ellipse(width/2+435,3*height/5+80,15);
  mi2 = ellipse(width/2+495,3*height/5+80,15);
  re = ellipse(width/2+555,3*height/5+90,15);
  pop();

  push();
  translate(0, height*0.2-50 );
  //notes
  noStroke();
  fill(255);
  ellipseMode(CENTER);

  // TUNE TWINKLE 3
  sol2 = ellipse(width/2+15,3*height/5+60,15);
  sol2 = ellipse(width/2+75,3*height/5+60,15);
  fa2 = ellipse(width/2+135,3*height/5+70,15);
  fa2 = ellipse(width/2+195,3*height/5+70,15);

  mi2 = ellipse(width/2+255,3*height/5+80,15);
  mi2 = ellipse(width/2+315,3*height/5+80,15);
  re = ellipse(width/2+375,3*height/5+90,15);

  donota = ellipse(width/2+435,3*height/5+100,15);
  donota = ellipse(width/2+495,3*height/5+100,15);
  sol2 = ellipse(width/2+555,3*height/5+60,15);
  sol2 = ellipse(width/2+615,3*height/5+60,15);
  pop();



    a = a + 0.04;
    s = cos(a) * 2;
    fill('#EBCA60');
    noStroke();

   if ((keyIsPressed == true) && (key == 'h')) {
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
    }


    else if ((keyIsPressed == true) && (key == 'a')) {
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
    }


    else if ((keyIsPressed == true) && (key == 's')) {
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
    }
      }

      function polygon(x, y, radius, npoints) {
        var angle = TWO_PI / npoints;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
          var sx = x + cos(a) * radius;
          var sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }

  // resize
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  }
