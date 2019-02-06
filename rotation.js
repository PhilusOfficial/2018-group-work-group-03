var myImageprofile;
var R = 0; //angle of rotation
var isStop = false; //initial value of "isStop"
var aim = 45; //Angle to aim
var range = 10; //range (in DEGREES) in wihch the value is ok
var col = "black"; //initial color
var img;
var button;
function preload(){
  myImageprofile = loadImage("./assets/profile.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES); //angle in degrees
  frameRate(6);


  button = createButton('Next Page');
  button.position(0.9*width, 0.9*height);


}

function draw() {
background('black');

push();
  //text
  textSize(20);
  noStroke();
  fill(255);
  textFont('Cutive Mono');
  textStyle(NORMAL);
  textAlign(LEFT);
  text("The clarinet should come out of your mouth at about a 45 degree angle.", width/12, height/5, 500,200);
  var w = textWidth("Click to stop");
  rect(width/12, height/3-18, w, 25);
  fill(0);
  text('Click to stop', width/12, height/3);
  pop();


//ROTATE
	push();
	translate(width/2, height/4.5); 	        //translate the center of the world at the center of the canvas
	rotate(-R);										        	//rotate all the world
  img = image(myImageprofile, 0,0, 0.32*myImageprofile.width, 0.32*myImageprofile.height);
	pop();

	if (isStop==false) { 		//If isStop is FALSE
		R++  								//continue to add vaule to R
		if (R>=90) {R=0} 	//if R is more than  360, set R to 0
	}
	else {R=R;} 	//if isStop is TRUE do not change R and call checkAngle function
}

  function mouseClicked() {
    if(mouseX< 0.85*width || mouseY<0.85*height) {isStop=!isStop; checkAngle();}  else{ button.mousePressed(changePage);}
  } //when the an mouse button is press invert the vaule of isStop, and call the fun function checkAngle()

  //change color to angle 45
  function checkAngle() {
  	if((isStop==true)&&(R>(aim-range))&&(R<(aim+range))){ //if isStop is true and R is between the range aim-range and aim+range, then text appear
    //text that will appear if 45°
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
    // window.location.href = "reed.html";
  } //else {frameRate(6)}; //else change color to red
  }

  function changePage() {
       window.location.href="mouth.html";}

  function windowResized() {
       resizeCanvas(windowWidth, windowHeight)
       }
