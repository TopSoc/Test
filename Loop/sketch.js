
var color = {
	r:0,
	g:0,
	b:0
}

function setup() {
  createCanvas(600,400);
}

function draw(){
  background(0);
  strokeWeight(4);
  stroke(255);
  for (var x=0; x<=mouseX; x+=50){
    for (var y=0; y<=mouseY; y+=50){
    fill(random(0,255),random(0,255), random(0,255));
    ellipse(x, y, 25,25);
    }   
  }
}

//function mouseIsPressed(){
//	if 
//}