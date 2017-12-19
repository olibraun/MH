class myButton{
  constructor(x,y,msg){
    this.w = 120;
    this.h = 50;
    this.pos = createVector(x,y);
    this.msg = msg;
    this.col = color(0,0,0);
  }

  hits(x,y){
    let X = this.pos.x;
    let Y = this.pos.y;
    return (abs(X-x) <= this.w/2 && abs(Y-y) <= this.h/2);
  }

  show(){
    push();
    stroke(this.col);
    strokeWeight(3);
    noFill();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,this.w,this.h);
    fill(this.col);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    textStyle(NORMAL);
    text(this.msg,this.pos.x,this.pos.y);
    pop();
  }
}