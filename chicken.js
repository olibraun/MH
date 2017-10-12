class Chicken{
  constructor(kind){
    this.pos = createVector(0,random(5*height/12));
    this.vel = createVector();
    this.alive = true;
    this.kind = kind;

    switch(kind){
      case "FRONT":
        this.imageScale = 1.4;
        this.velXScale = 1;
        this.velYScale = .2;
        break;

      case "MIDDLE":
        this.imageScale = 0.8;
        this.velXScale = .8;
        this.velYScale = .1;
        break;

      case "BACK":
        this.imageScale = 0.3;
        this.velXScale = .7;
        this.velYScale = .05;
        break;
    }
  }

  hits(x,y){
    return x >= this.pos.x && x <= this.pos.x + this.imageScale*img_chicken_alive.width && y >= this.pos.y && y <= this.pos.y + this.imageScale*img_chicken_alive.height;
  }

  update(){
    this.pos.add(this.vel);
    switch(this.kind){
      case "FRONT":
        this.vel.x = this.velXScale;
        this.vel.y = sin(this.velYScale*this.pos.x);
        break;

      case "MIDDLE":
        this.vel.x = this.velXScale;
        this.vel.y = sin(this.velYScale*this.pos.x);
        break;

      case "BACK":
        this.vel.x = this.velXScale;
        this.vel.y = sin(this.velYScale*this.pos.x);
        break;
    }
  }

  show(){
    image(img_chicken_alive,this.pos.x,this.pos.y,this.imageScale*img_chicken_alive.width,this.imageScale*img_chicken_alive.height);
    if(debug){
      stroke(255);
      strokeWeight(4);
      noFill();
      rect(this.pos.x,this.pos.y,this.imageScale*img_chicken_alive.width,this.imageScale*img_chicken_alive.height);
    }
  }
}
