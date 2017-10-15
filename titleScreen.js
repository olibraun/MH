class titleScreen{
  constructor(){
  }

  show(){
    background(51);
    let bbb = img_chicken_huge;
    image(bbb,0,height-bbb.height);
    image(bbb,width-bbb.width,height-bbb.height);
    fill(0, 255, 0);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(35);
    textStyle(NORMAL);
    text("MOORHUHN TITLE SCREEN",width/2,height/2);
  }
}
