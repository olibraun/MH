class gameManager{
  constructor(){
    this.screenState = "TITLE";
    this.score = 0;
    this.title = new titleScreen();
  }

  update(){
    if(this.screenState === "PLAYING"){
      //Generate new chickens
      if(random(1) < 0.005){
        chickens.push(new Chicken( random(["FRONT","MIDDLE","BACK"]) , random(["RIGHT_TO_LEFT","LEFT_TO_RIGHT"]) ) );
      }

      //Update and, if necessary, remove chickens
      for(let i=chickens.length-1; i >= 0; i--){
        chickens[i].update();
        if(chickens[i].offScreen()){
          chickens.splice(i,1);
        }
      }
    }
  }

  mouseAction(){
    switch(this.screenState){
      case "TITLE":
        this.screenState="PLAYING";
        break;

      case "PLAYING":
        snd_gun_fire.play();
        for(let i=chickens.length-1; i >= 0; i--){
          if(chickens[i].hits(mouseX,mouseY)){
            chickens[i].alive = false;
          }
        }
        break;
    }
  }

  show(){
    switch(this.screenState){
      case "TITLE":
        this.title.show();
        break;

      case "PLAYING":
        image(img_background,0,0,1200,700);
        if(!snd_background.isPlaying()){
          snd_background.play();
        }

        for(let i=chickens.length-1; i >= 0; i--){
          chickens[i].show();
        }
        break;
    }
  }
}
