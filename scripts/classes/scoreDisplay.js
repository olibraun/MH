class scoreDisplay{
  constructor(string,x,y){
    this.str = string;
    this.x = x;
    this.y = y;
    this.timer = 50;
    this.alpha = 255;
    this.alphaSubtract = this.alpha / this.timer;
  }

  show(){
    //This classes show-Method also contains updates for convenience
    this.timer--;
    this.y--;
    this.alpha-=this.alphaSubtract;
    fill(255,this.alpha);
    stroke(0,this.alpha);
    strokeWeight(4);
    textAlign(CENTER,CENTER);
    textFont(silly_font);
    if(this.timer >= 0){
      text(this.str,this.x,this.y);
    }
  }
}