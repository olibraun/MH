class titleScreen{
  constructor(ref){
    this.parentManager = ref;
    this.startButton = new myButtonWithColor(width/2,height/2,"start",color(255,255,255));
  }

  mouseAction(x,y){
    if(this.startButton.hits(x,y)){
      this.parentManager.start();
    }
  }

  show(){
    if(!snd_song.isPlaying()){
      snd_song.play();
    }
    background(51);
    this.startButton.show();
    let bbb = img_chicken_huge;
    //image(bbb,0,height-bbb.height);
    image(bbb,width-bbb.width,height-bbb.height);
    push();
    fill(0, 255, 0);
    noStroke();
    textAlign(LEFT,TOP);
    textSize(50);
    textStyle(NORMAL);
    textFont(silly_font);
    let msg;
    msg = "Moorhuhn-Klon";
    text(msg,25,25);
    textSize(20);
    msg = "v1.0";
    text(msg,25,height-30);
    pop();
  }
}
