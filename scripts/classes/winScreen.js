class winScreen{
  constructor(points){
    this.points = points;
    this.scoreManager = new ScoreManager();
  }

  show(){
    snd_background.stop();
    background(255);
    let bbb = img_chicken_thumbs_up;
    image(bbb,width-bbb.width,height-bbb.height);
    fill(0);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(35);
    textStyle(NORMAL);
    textFont(silly_font);
    let msg = "Herzlichen Glueckwunsch!\nDu hast " + str(this.points) + " Punkte!";
    msg += "\n\nKlicke, um erneut zu spielen!"
    text(msg,width/2,height/2);
  }
}
