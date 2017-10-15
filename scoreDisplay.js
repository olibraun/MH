class scoreDisplay{
  constructor(string,x,y){
    this.str = string;
    this.x = x;
    this.y = y;
    this.timer = 60;
  }

  updateAndShow(){
    this.timer--;
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER,CENTER);
    textFont(silly_font);
    if(this.timer >= 0){
      text(this.str,this.x,this.y);
    }
  }
}
