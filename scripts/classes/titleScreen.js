class titleScreen{
  constructor(){
  }

  show(){
    if(!snd_song.isPlaying()){
      snd_song.play();
    }
    background(51);
    let bbb = img_chicken_huge;
    image(bbb,0,height-bbb.height);
    image(bbb,width-bbb.width,height-bbb.height);
    fill(0, 255, 0);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(35);
    textStyle(NORMAL);
    textFont(silly_font);
    let msg;
    msg = "Moorhuhn-Klon";
    msg += "\n\n";
    msg += "Klicke, um zu spielen!"
    msg += "\n\n";
    msg += "Warte, um ein tolles Lied zu komplett hoeren!"
    text(msg,width/2,height/2);
  }
}
