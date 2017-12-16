class huge_chicken{
  constructor(){
    this.img = img_chicken_huge;
    this.pos = createVector(random(0,width-this.img.width),height-this.img.height);
    this.alive = true;
    this.alive_time = 60;

    snd_big_chicken_appears.play();
  }

  update(){
    if(this.alive){
      this.alive_time--;
    }else{
      this.pos.y+=10;
    }
    if(this.alive_time < 0 && this.alive){
      this.alive = false;
    }
  }

  offScreen(){
    return this.pos.y >= height;
  }

  hits(x,y){
    return x >= this.pos.x && x <= this.pos.x + this.img.width && y >= this.pos.y && y <= this.pos.y + this.img.height;
  }

  show(){
    image(this.img,this.pos.x,this.pos.y);
  }
}
