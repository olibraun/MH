myButton = function(x,y,msg){
  this.w = 100;
  this.h = 50;
  this.pos = createVector(x,y);
  this.msg = msg;

  this.hits = function(x,y){
    let X = this.pos.x;
    let Y = this.pos.y;
    return (abs(X-x) <= this.w/2 && abs(Y-y) <= this.h/2);
  }

  this.show = function(){
    stroke(179, 179, 204);
    strokeWeight(3);
    noFill();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,this.w,this.h);
    fill(255);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    textStyle(NORMAL);
    text(msg,this.pos.x,this.pos.y);
  }
}
