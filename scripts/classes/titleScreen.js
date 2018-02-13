class titleScreen{
  constructor(ref){
    this.parentManager = ref;
    this.startButton = new myButtonWithColor(width/2,height/2-30,"start",color(0,0,0));
    this.highScoreButton = new myButtonWithColor(width/2,height/2+30,"highscore",color(0,0,0));
  }

  mouseAction(x,y){
    if(this.startButton.hits(x,y)){
      this.parentManager.start();
    }
    if(this.highScoreButton.hits(x,y)){
      this.parentManager.screenState = "HIGHSCORE";
    }
  }

  show(){
    if(!snd_song.isPlaying()){
      snd_song.play();
    }
    background(251);
    this.startButton.show();
    this.highScoreButton.show();
    let bbb = img_chicken_huge;
    image(bbb,width-bbb.width,height-bbb.height);
    push();
    fill(51);
    noStroke();
    textAlign(LEFT,TOP);
    textSize(50);
    textStyle(NORMAL);
    textFont(silly_font);
    let msg;
    msg = "Moorhuhn-Klon";
    text(msg,25,25);
    textSize(20);
    msg = "v1.2";
    text(msg,25,height-30);
    pop();
  }
}