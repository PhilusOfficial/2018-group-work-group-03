![clarinet_gif](https://user-images.githubusercontent.com/43534301/52316396-73353200-29bb-11e9-9aff-a9d61f41f6f3.gif)


## **Project Idea**

**CLARINETTO** is a musical project built in p5.js for the course Creative Coding at the Politecnico di Milano. The main goal was to create something related to music and as a result we want to show you how the instrument functions and produces sounds. After choosing an instrument we had a brainstorming about what to present and how to present it. At the end, we decided to create and provide some basic but useful information. With our project one can learn about parts of the clarinet, the production of the sound and even to virtually play the clarinet.

## **Graphics**

Clarinet itself is very complex so we wanted to present it as simple and as elegant as possible, but still showing all important details. Every drawing of it, is designed in Illustrator and Photoshop, but the notes are drawn in p5.js.

![drawing](https://user-images.githubusercontent.com/43534301/52316447-abd50b80-29bb-11e9-8a89-cdabebaa336f.GIF)


## **Design challenge**

Even though we wanted to have as many interactions as possible, we knew that we had to choose what suits our project. Lastly, we decided to make interactions with the mouse, keyboard and the microphone. 

* **mouse interaction**  
   
The idea behind this interaction is that user can learn the correct structure of the clarinet in a playful way. 
   
![mousegif](https://user-images.githubusercontent.com/43534301/52322372-38da8d80-29d9-11e9-955c-6f49774cd8b0.gif)   
```
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
```


* **keyboard interaction**

By pressing the certain keys, one will hear the basic notes. However, except hearing the notes, you will be able to see which keys on clarinet need to be pressed in order to produce certain note.
   
![keygif](https://user-images.githubusercontent.com/43534301/52322399-5871b600-29d9-11e9-849c-fc1f9c49c6a5.gif)  
```
   function draw() {
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
```
   

* **microphone interaction**

With this interaction we wanted to show how the sound is produced. After learning about the correct angle position of the clarinet, one will see the correct mouth position and the air flow.

![mouthpic](https://user-images.githubusercontent.com/43534301/52322439-7b03cf00-29d9-11e9-90ac-a7f280a088d7.png)
```
 if (mouseX > ax-imageSize && mouseX < ax+imageSize &&
      mouseY > ay-imageSize && mouseY < ay+imageSize) {
    overBox = true;
  } else {
    overBox = false;
  }
  if (volume >0.1) {
    myfa2.play();
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
```
   

 ## **Code challenge**

We expanded and explored the code that we were familiar with. We came across several problems with every part or page which primarily drove us crazy, but at the end it wasn’t anything that we could not fix.

* **code for rotation**
   
   
```
   function draw() {
   push();
	translate(width/2, height/4.5);
   rotate(-R);
    img = image(myImageprofile, 0,0, 0.32*myImageprofile.width, 0.32*myImageprofile.height);
	pop();

	if (isStop==false) {
   R++
   if (R>=90) {R=0}
   }
	else {R=R;} 
   }
   function mouseClicked() {
    if(mouseX< 0.85*width || mouseY<0.85*height) {isStop=!isStop; checkAngle();}  else{ button.mousePressed(changePage);}
  }
   function checkAngle() {
  	if((isStop==true)&&(R>(aim-range))&&(R<(aim+range))){
    frameRate(0)
    textSize(20);
    noStroke();
    fill(255);
    textFont('Cutive Mono');
    textStyle(NORMAL);
    textAlign(LEFT);
      text('Sound comes and goes depending on how you hold the clarinet.You should keep your elbows in so that the top of your arm and the back of your hand make a straight line.', width/12, 4*height/5, 750,200);
   var w = textWidth('Well done!');
 rect(width/12, 3*height/4-18, w, 25);
   fill(0);
   testo = text('Well done!', width/12, 3*height/4);
```
   

* **following the tune**

## **Inspirations**

* https://www.patatap.com/

* https://musiclab.chromeexperiments.com/Experiments

* http://mchn.st/ 


## **Theory references**

* https://www.theclarinet.net/

* http://www.the-clarinets.net/

* http://newt.phys.unsw.edu.au/jw/clarinetacoustics.html#overview

 
 ## **Libraries**
 
 * p5.sound
 
 
 ## **Team members**
 
 Ivana Riva
 
 Kira Pyatakova
 
 Irina Stojsic
 
 Mariapaola Gentile
 
 
 ## **Course reference and academic year**
 
 Creative Coding 2018/2019 (link)
 
 Politecnico di Milano - Scuola del Design

 Faculty: Michele Mauri, Tommaso Elli



