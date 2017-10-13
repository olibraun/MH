class Chicken{
  constructor(kind,direction){
    this.pos = createVector(0,random(5*height/12));
    this.vel = createVector();
    this.alive = true;
    this.kind = kind;
    this.direction = direction;

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

    if(this.direction == "RIGHT_TO_LEFT"){
      this.velXScale *= -1;
      this.pos.x = width;
    }
  }

  hits(x,y){
    return x >= this.pos.x && x <= this.pos.x + this.imageScale*img_chicken_alive.width && y >= this.pos.y && y <= this.pos.y + this.imageScale*img_chicken_alive.height;
  }

  offScreen(){
    return this.pos.x > width || this.pos.x < 0 || this.pos.y > height;
  }

  update(){
    this.pos.add(this.vel);
    switch(this.kind){
      case "FRONT":
        this.vel.x = this.alive ? this.velXScale : 0;
        this.vel.y = this.alive ? sin(this.velYScale*this.pos.x) : 5;
        break;

      case "MIDDLE":
        this.vel.x = this.alive ? this.velXScale : 0;
        this.vel.y = this.alive ? sin(this.velYScale*this.pos.x) : 5;
        break;

      case "BACK":
        this.vel.x = this.alive ? this.velXScale : 0;
        this.vel.y = this.alive ? sin(this.velYScale*this.pos.x) : 5;
        break;
    }
  }

  show(){
    let im;
    if(this.direction == "RIGHT_TO_LEFT"){
      im = this.alive ? img_chicken_alive_2 : img_chicken_dead_2;
    }else{
      im = this.alive ? img_chicken_alive : img_chicken_dead;
    }
    image(im,this.pos.x,this.pos.y,this.imageScale*img_chicken_alive.width,this.imageScale*img_chicken_alive.height);
    if(debug){
      stroke(255);
      strokeWeight(4);
      noFill();
      rect(this.pos.x,this.pos.y,this.imageScale*img_chicken_alive.width,this.imageScale*img_chicken_alive.height);
    }
  }
}
