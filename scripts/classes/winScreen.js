class winScreen{
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
    text("MOORHUHN TITLE SCREEN\nMoorhuhn",width/2,height/2);
  }
}
