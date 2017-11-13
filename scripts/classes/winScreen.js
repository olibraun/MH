class winScreen{
  constructor(points){
    //Dies wird eine Referenz auf den Game Manager, die durch die MouseAction befüllt wird.
    this.parentManager = null;

    this.points = points;
    this.scoreManager = new ScoreManager();
    this.buttons = [];
    this.submitted = false;

    this.buttons.push(new myButton(width/2-70,180,"restart"));
    this.buttons.push(new myButtonWithState(width/2+70,180,"submit\nhighscore"));

    //Rufe aktuelle Highscore im Konstruktor aus der DB ab.
    Promise.all([this.scoreManager.queryHighscoreFromDB()]).then(res => this.scoreManager.orderHighscore());
  }

  mouseAction(x,y,ref){
    this.parentManager = ref;
    if(this.buttons[0].hits(x,y)){
      //Restart-Button
      this.parentManager.start();
    }
    if(this.buttons[1].hits(x,y) && !this.submitted){
      //Restart-Button
      this.scoreManager.scoreSubmission(this.points);
      this.scoreManager.queryHighscoreFromDB();
      this.submitted = true;
      this.buttons[1].deactivate();
    }
  }

  show(){
    snd_background.stop();
    background(255);
    this.buttons.forEach(button => button.show());
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

    msg = "Highscore-Liste"
    text(msg,width/2,height/2)

    let hs_msg = "";
    for(let i=0; i<this.scoreManager.names_array.length; i++){
      hs_msg = hs_msg + this.scoreManager.names_array[i] + ":   " + str(this.scoreManager.scores_array[i]) + " Punkte\n";
    }
    text(hs_msg,width/2,height/2+88);
  }
}
