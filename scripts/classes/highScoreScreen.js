class HighScoreScreen{
  constructor(parent_ref){
    //Dies wird eine Referenz auf den Game Manager, die durch die MouseAction befüllt wird.
    this.parentManager = parent_ref;
    this.scoreManager = new ScoreManager();

    this.backButton = new myButtonWithColor(115,660,"Go back",color(0,0,0));

    //this.buttons.push(new myButton(width/2-70,180,"restart"));
    //this.buttons.push(new myButtonWithState(width/2+70,180,"submit\nhighscore"));

    //Rufe aktuelle Highscore im Konstruktor aus der DB ab.
    Promise.all([this.scoreManager.queryHighscoreFromDB()]).then(res => this.scoreManager.orderHighscore());
  }

  mouseAction(x,y){
    if(this.backButton.hits(x,y)){
      this.parentManager.screenState = "TITLE";
    }
  }

  show(){
    snd_background.stop();
    snd_song.stop();
    background(251);

    this.backButton.show();

    let bbb = img_chicken_thumbs_up;
    image(bbb,width-bbb.width,height-bbb.height);

    push();
    fill(0);
    noStroke();
    textAlign(CENTER,TOP);
    textSize(35);
    textStyle(NORMAL);
    textFont(silly_font);

    let msg = "highscore";
    text(msg,width/2,height/2-180);

    textSize(25);
    let hs_msg = "";
    for(let i=0; i<this.scoreManager.names_array.length; i++){
      hs_msg = hs_msg + this.scoreManager.names_array[i] + ":   " + str(this.scoreManager.scores_array[i]) + " Punkte\n";
    }
    text(hs_msg,width/2,height/2-117);
    pop();
  }
}