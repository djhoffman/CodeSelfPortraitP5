/*
Code Self Portrait P5.JS
DJ Hoffman
*/

var stateAngry = 1; // var stateAngry = 1;
var stateHappy = 2; // var stateHappy = 2;
var stateSleeping = 3; // var stateConfused = 3;

function setup() {
  createCanvas(500, 800);
  state=stateAngry
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTION~~

function mousePressed() {
 state = stateAngry
}

function keyPressed()
{
  //change stuff
  if (key == '1')
  {
   state = stateHappy
  }
  if (key == '2')
  {
   state = stateSleeping
  }
  
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DRAW~~

function draw() {
  
  if (state == stateAngry) {
    drawAngry();
  }
  
  else if (state == stateHappy) {
    drawHappy();
  }
  else if (state == stateSleeping) {
    drawSleeping();
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ANGRY~~

function drawAngry() {

  background(219, 11, 11);
  
  // hair
  fill(26, 9, 0);
  ellipse(250, 250, 400, 400);
  stroke(0);
  rect(50, 250, 400, 200);

   // ears
  fill(255, 191, 128);
  ellipse(100, 250, 50, 100);
  stroke(0);
  ellipse(400, 250, 50, 100);

   // neck
  fill(255, 191, 128); //skin color
  rect(200, 250, 100, 250);
  stroke(0);
  
  // head
  fill(255, 191, 128);
  ellipse(250, 250, 300, 370);
  stroke(0);

  //bangs
  fill(26, 9, 0);
  
  //arc(250,200, 300, 300, PI, TWO_PI);
  arc(135, 100, 220, 250, -.41, HALF_PI + QUARTER_PI);
  arc(350, 100, 250, 250, .75, PI + QUARTER_PI);

  //eyes
  fill(0); //black
  ellipse(170, 250, 70, 30);
  ellipse(330, 250, 70, 30);
  
  //eyecolor
  fill(199, 0, 0); //red
  ellipse(170, 250, 30, 30);
  ellipse(330, 250, 30, 30);

    //eyecolor
  fill(199, 0, 0); // red
  ellipse(170, 250, 30, 30);
  ellipse(330, 250, 30, 30);
  
  //pupil
  fill(0); //black
  ellipse(170, 250, 10, 10);
  ellipse(330, 250, 10, 10);
  
  //mole
  fill(153, 51, 0);
  ellipse(270, 340, 3, 3);
  
  //eyebrow angry
  fill(0);
  line(200, 230, 130,180);
  line(300, 230, 370, 180);

   //shine
  fill(255);
  ellipse(175, 240, 10, 10);
  ellipse(335, 240, 10, 10);
 
  //mouth angry
  fill(255, 191, 128); //skin color
  arc(250, 380, 50, 40, PI, TWO_PI );
  
  //nose
  noFill();
  bezier(250, 250, 200, 370, 280, 300, 260, 310);
  
  //body
  fill(0);
  rect(100, 500, 300, 400);
  
   //arm left
  fill(255, 191, 128);
  rect(50, 520, 50, 250);

  //arm right
  fill(255, 191, 128);
  rect(400, 520, 50, 250);
  
  //HAT
  fill(0);
  arc(250, 150, 350, 320, PI, TWO_PI );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HAPPY~~

function drawHappy() {
  background(255, 226, 10);
  
  // hair
  fill(26, 9, 0);
  ellipse(250, 250, 400, 400);
  stroke(0);
  rect(50, 250, 400, 200);

  // ears
  fill(255, 191, 128);
  ellipse(100, 250, 50, 100);
  stroke(0);
  ellipse(400, 250, 50, 100);

  // neck
  fill(255, 191, 128);
  rect(200, 250, 100, 250);
  stroke(0);
  
  // head
  fill(255, 191, 128);
  ellipse(250, 250, 300, 370);
  stroke(0);

  //bangs
  fill(26, 9, 0);
  
  //arc(250,200, 300, 300, PI, TWO_PI);
  arc(135, 100, 220, 250, -.41, HALF_PI + QUARTER_PI);
  arc(350, 100, 250, 250, .75, PI + QUARTER_PI);

  //eyes
  fill(255); // white
  ellipse(170, 250, 70, 30);
  ellipse(330, 250, 70, 30);
  
  //eyecolor
  fill(255); // white
  ellipse(170, 250, 30, 30);
  ellipse(330, 250, 30, 30);

  //eyecolor
  fill(82, 26, 0); //brown
  ellipse(170, 250, 30, 30);
  ellipse(330, 250, 30, 30);
  
  //pupil
  fill(0); // black
  ellipse(170, 250, 10, 10);
  ellipse(330, 250, 10, 10);
  
  //mole
  fill(153, 51, 0);
  ellipse(270, 340, 3, 3);
  
  //eyebrow happy
  fill(0);
  line(200, 220, 130,230);
  line(300, 220, 370, 230);

  //shine
  fill(255);
  ellipse(175, 240, 10, 10);
  ellipse(335, 240, 10, 10);
 
  //mouth happy
  fill(255);
   arc(250, 370, 60, 40, 0, PI, CHORD);
  
  //nose
  noFill();
  bezier(250, 250, 200, 370, 280, 300, 260, 310);
  
  //body
  fill(255, 0, 238); //pink
  rect(100, 500, 300, 400);
  
  //arm left
  fill(255, 191, 128);
  rect(50, 520, 50, 250);

  //arm right
  fill(255, 191, 128);
  rect(400, 520, 50, 250);
  
  //HAT
  fill(255, 106, 0); //orange
  arc(250, 150, 350, 320, PI, TWO_PI );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SLEEPING~~

function drawSleeping() {
  background(22, 17, 171); //blue


  // hair
  fill(26, 9, 0);
  ellipse(250, 250, 400, 400);
  stroke(0);
  rect(50, 250, 400, 200);

   // ears
  fill(255, 191, 128);
  ellipse(100, 250, 50, 100);
  stroke(0);
  ellipse(400, 250, 50, 100);

   // neck
  fill(255, 191, 128);
  rect(200, 250, 100, 250);
  stroke(0);
  
  // head
  fill(255, 191, 128);
  ellipse(250, 250, 300, 370);
  stroke(0);

  //bangs
  fill(26, 9, 0);
  
  //arc(250,200, 300, 300, PI, TWO_PI);
  arc(135, 100, 220, 250, -.41, HALF_PI + QUARTER_PI);
  arc(350, 100, 250, 250, .75, PI + QUARTER_PI);
  
  // left eye sleep
  fill(250, 191, 128); //skin color
  arc(170, 260, 60, 30, PI, TWO_PI );

  // right eye sleep
  fill(255, 191, 128); //skin color
  arc(330, 260, 60, 30, PI, TWO_PI );
  
  //mole
  fill(153, 51, 0);
  ellipse(270, 340, 3, 3);
  
  //eyebrow meh
  fill(0);
  line(200, 230, 130,230);
  line(300, 230, 370, 230);
 
  //mouth smile
  fill(250, 191, 128); //skin color
  arc(250, 370, 60, 40, 0, PI, TWO_PI);
  
  //nose
  noFill();
  bezier(250, 250, 200, 370, 280, 300, 260, 310);
  
  //body
  fill(0);
  rect(100, 500, 300, 400);
  
  //arm left
  fill(255, 191, 128);
  rect(50, 520, 50, 250);

  //arm right
  fill(255, 191, 128);
  rect(400, 520, 50, 250);
  
  //HAT
  fill(0);
  arc(250, 150, 350, 320, PI, TWO_PI );
  
  //for loop attempt
  textSize(100);
  fill(255);
  for(var i = 50; i<200; i+=50){
    text('z',i,i);
  }
  
}