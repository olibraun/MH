class gameManager{
  constructor(){
    this.screenState = "TITLE";

    this.score = 0;
    this.gameTime = 999999;

    this.title = new titleScreen();
    this.winScreen = null;
    this.gun = new Gun();

    this.backLayer = [];
    this.middleLayer = [];
    this.frontLayer = [];
    this.scoreDisplays = [];
  }

  start(){
    snd_song.stop();
    this.backLayer = [];
    this.middleLayer = [];
    this.frontLayer = [];
    this.scoreDisplays = [];
    this.gun.reload();
    this.screenState="PLAYING";
    this.gameTime = 90;
    setInterval(this.updateTimer.bind(this),1000);
  }

  update(){
    if(this.gameTime <= 0){
      this.screenState = "WIN";
      this.winScreen = new winScreen(this.score);
    }
    if(this.screenState === "PLAYING"){
      //Generate new chickens
      if(random(1) < 0.009){
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
      //If appropriate, remove score displays
      for(let i=this.scoreDisplays.length-1; i >= 0; i--){
        if(this.scoreDisplays[i].timer < 0){
          this.scoreDisplays.splice(i,1);
        }
      }
    }
  }

  updateTimer(){
    this.gameTime -= 1;
  }

  mouseAction(x,y){
    switch(this.screenState){
      case "TITLE":
        this.start();
        break;

      case "PLAYING":
        let gun_result = this.gun.fire();
        if(gun_result){
          //Make sure we only kill one chicken per click
          let chicken_killed = false;
          //Kill the front chickens first
          for(let i=this.frontLayer.length-1; i >= 0; i--){
            if(this.frontLayer[i].hits(mouseX,mouseY) && !chicken_killed && this.frontLayer[i].alive){
              this.frontLayer[i].alive = false;
              snd_chicken_hit_close.play();
              chicken_killed = true;
              this.scoreDisplays.push(new scoreDisplay("5",x,y) );
              this.score += 5;
              break;
            }
          }
          for(let i=this.middleLayer.length-1; i >= 0; i--){
            if(this.middleLayer[i].hits(mouseX,mouseY) && !chicken_killed && this.middleLayer[i].alive){
              this.middleLayer[i].alive = false;
              snd_chicken_hit_mid.play();
              chicken_killed = true;
              this.scoreDisplays.push(new scoreDisplay("10",x,y) );
              this.score += 10;
              break;
            }
          }
          for(let i=this.backLayer.length-1; i >= 0; i--){
            if(this.backLayer[i].hits(mouseX,mouseY) && !chicken_killed && this.backLayer[i].alive){
              this.backLayer[i].alive = false;
              snd_chicken_hit_far.play();
              chicken_killed = true;
              this.scoreDisplays.push(new scoreDisplay("25",x,y) );
              this.score += 25;
              break;
            }
          }
        }
        break;

      case "WIN":
        this.start();
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
        for(let i=this.scoreDisplays.length-1; i >= 0; i--){
          this.scoreDisplays[i].updateAndShow();
        }

        this.gun.show();

        textFont(silly_font);
        fill(255);
        stroke(0);
        strokeWeight(4);
        textAlign(RIGHT,TOP);
        text(str(this.score),width,0);

        textAlign(LEFT,TOP);
        text(convertSeconds(this.gameTime),0,0);
        break;

      case "WIN":
        this.winScreen.show();
        break;
    }
  }
}
