class winScreen{
  constructor(points){
    this.points = points;
  }

  show(){
    if(!snd_song.isPlaying()){
      snd_song.play();
    }
    background(255);
    let bbb = img_chicken_thumbs_up;
    image(bbb,width-bbb.width,height-bbb.height);
    fill(0);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(35);
    textStyle(NORMAL);
    textFont(silly_font);
    text("Herzlichen Glückwunsch!\nDu hast " + str(this.points) + " Punkte!",width/2,height/2);
  }
}
