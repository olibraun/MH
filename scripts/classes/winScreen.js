class winScreen{
  constructor(points){
    console.log("winScreen constructor");
    this.points = points;
    this.scoreManager = new ScoreManager();

    Promise.all([this.scoreManager.queryHighscoreFromDB()]).then(res => this.scoreManager.orderHighscore());
  }

  show(){
    snd_background.stop();
    background(255);
    let bbb = img_chicken_thumbs_up;
    image(bbb,width-bbb.width,height-bbb.height);
    fill(0);
    noStroke();
    textAlign(CENTER,TOP);
    textSize(35);
    textStyle(NORMAL);
    textFont(silly_font);
    let msg = "Herzlichen Glueckwunsch!\nDu hast " + str(this.points) + " Punkte!";
    text(msg,width/2,10);

    let hs_msg = "";
    for(let i=0; i<this.scoreManager.names_array.length; i++){
      hs_msg = hs_msg + this.scoreManager.names_array[i] + "   " + str(this.scoreManager.scores_array[i]) + "\n";
    }
    text(hs_msg,width/2,height/2+100);
  }
}
