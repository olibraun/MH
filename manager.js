class gameManager{
  constructor(){
    this.screenState = "TITLE";

    this.score = 0;

    this.title = new titleScreen();
    this.gun = new Gun();

    this.backLayer = [];
    this.middleLayer = [];
    this.frontLayer = [];
  }

  update(){
    if(this.screenState === "PLAYING"){
      //Generate new chickens
      if(random(1) < 0.005){
        let temp_kind = random(["FRONT","MIDDLE","BACK"]);
        let temp_chicken = new Chicken( temp_kind , random(["RIGHT_TO_LEFT","LEFT_TO_RIGHT"]) );
        switch(temp_kind){
          case "FRONT":
            this.frontLayer.push(temp_chicken);
            break;

          case "MIDDLE":
            this.middleLayer.push(temp_chicken);
            break;

          case "BACK":
            this.backLayer.push(temp_chicken);
            break;
        }
      }

      //Update and, if necessary, remove chickens
      for(let i=this.backLayer.length-1; i >= 0; i--){
        this.backLayer[i].update();
        if(this.backLayer[i].offScreen()){
          this.backLayer.splice(i,1);
        }
      }
      for(let i=this.middleLayer.length-1; i >= 0; i--){
        this.middleLayer[i].update();
        if(this.middleLayer[i].offScreen()){
          this.middleLayer.splice(i,1);
        }
      }
      for(let i=this.frontLayer.length-1; i >= 0; i--){
        this.frontLayer[i].update();
        if(this.frontLayer[i].offScreen()){
          this.frontLayer.splice(i,1);
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
        let gun_result = this.gun.fire();
        if(gun_result){
          for(let i=chickens.length-1; i >= 0; i--){
            if(chickens[i].hits(mouseX,mouseY)){
              chickens[i].alive = false;
            }
          }
        }
        break;
    }
  }

  keyboardAction(keycode){
    if(keycode == '32'){
      //Spacebar
      this.gun.reload();
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

        for(let i=this.backLayer.length-1; i >= 0; i--){
          this.backLayer[i].show();
        }
        for(let i=this.middleLayer.length-1; i >= 0; i--){
          this.middleLayer[i].show();
        }
        for(let i=this.frontLayer.length-1; i >= 0; i--){
          this.frontLayer[i].show();
        }

        this.gun.show();
        break;
    }
  }
}
