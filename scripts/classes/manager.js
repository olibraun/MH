class gameManager{
  constructor(){
    this.screenState = "TITLE";

    this.score = 0;
    this.gameTime = 999999;

    this.title = new titleScreen(this);
    this.winScreen = null;
    this.highScoreScreen = new HighScoreScreen(this);

    this.gun = new Gun();

    this.backLayer = [];
    this.middleLayer = [];
    this.frontLayer = [];
    this.hugeLayer = [];
    this.scoreDisplays = [];

    //Call updateTimer every 1000 milliseconds automatically
    setInterval(this.updateTimer.bind(this),1000);
  }

  start(){
    snd_song.stop();
    this.backLayer = [];
    this.middleLayer = [];
    this.frontLayer = [];
    this.hugeLayer = [];
    this.scoreDisplays = [];
    this.gun.reload();
    this.screenState="PLAYING";
    this.score = 0;
    this.gameTime = 90;
  }

  update(){
    if(this.gameTime <= 0 && this.screenState != "WIN"){
      this.screenState = "WIN";
      this.winScreen = new winScreen(this.score);
    }
    if(this.screenState === "PLAYING"){
      //Generate new chickens
      if(random(1) < 0.02){
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
      //Generate huge chickens
      if(random(1)<0.002 && this.hugeLayer.length == 0){
        this.hugeLayer.push(new huge_chicken());
      }

      //Update and, if necessary, remove chickens
      [this.backLayer,this.middleLayer,this.frontLayer,this.hugeLayer].forEach(layer => {
        for(let i=layer.length-1; i >= 0; i--){
          layer[i].update();
          if(layer[i].offScreen()){
            layer.splice(i,1);
          }
        }
      });
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
        this.title.mouseAction(x,y);
        break;

      case "PLAYING":
        let gun_result = this.gun.fire();
        if(gun_result){
          //Make sure we only kill one chicken per click
          let chicken_killed = false;
          //Kill the front chickens first -- after the huge chicken
          //Use a for-of-Loop which is guaranteed to go through the array in order (ES6 specification)
          const layerArray = [this.hugeLayer,this.frontLayer,this.middleLayer,this.backLayer];
          for(let layer of layerArray){
            for(let i=layer.length-1; i >= 0; i--){
              if(layer[i].hits(mouseX,mouseY) && !chicken_killed && layer[i].alive){
                layer[i].alive = false;
                chicken_killed = true;
                switch(layer){
                  case this.hugeLayer:
                  snd_big_chicken_shot.play();
                  this.scoreDisplays.push(new scoreDisplay("30",x,y) );
                  this.score += 30;
                  break;

                  case this.frontLayer:
                  snd_chicken_hit_close.play();
                  this.scoreDisplays.push(new scoreDisplay("5",x,y) );
                  this.score += 5;
                  break;

                  case this.middleLayer:
                  snd_chicken_hit_mid.play();
                  this.scoreDisplays.push(new scoreDisplay("10",x,y) );
                  this.score += 10;
                  break;

                  case this.backLayer:
                  snd_chicken_hit_far.play();
                  this.scoreDisplays.push(new scoreDisplay("25",x,y) );
                  this.score += 25;
                  break;
                }
                
                break;
              }
            }
          }
        }
        break;
          
      case "WIN":
        this.winScreen.mouseAction(x,y,this);
        break;

      case "HIGHSCORE":
        this.highScoreScreen.mouseAction(x,y);
        break;
    }
  }

  rightMouseAction(x,y){
    if(this.screenState == "PLAYING"){
      this.gun.reload();
    }
  }

  keyboardAction(keycode){
    if(keycode == '32'){
      //Spacebar
      this.gun.reload();
    }
  }

  show(x,y){
    switch(this.screenState){
      case "TITLE":
        this.title.show();
        break;

      case "PLAYING":
        image(img_background,0,0,1200,700);
        if(!snd_background.isPlaying()){
          snd_background.play();
        }

        //Call the show-functions in a forward loop
        //This way it is properly matched with the backwards shooting loop
        //I.e. shooting kills the first bird to be seen...
        [this.backLayer,this.middleLayer,this.frontLayer,this.hugeLayer,this.scoreDisplays].forEach(layer => {
          for(let i=0; i < layer.length; i++){
            layer[i].show();
          }
        });

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

      case "HIGHSCORE":
        this.highScoreScreen.show();
        break;
    }
  }
}