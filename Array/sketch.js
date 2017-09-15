var bubbles = [];

function setup(){
  createCanvas(800, 600);
  for (var i=0; i<4000; i++){
    bubbles[i] = {
      x : random(0, width),
      y : random(0, height),
      display: function() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24,24);
      },
      move: function(){
        this.x=this.x+random(-1,1);
        this.y=this.y+random(-1,1);
      }
    }
  }
  
}

function draw(){
  background(0);
  for (var i=0; i<bubbles.length; i++){ 
    bubbles[0].display();
    bubbles[0].move();
  }
}