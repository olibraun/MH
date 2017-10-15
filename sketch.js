//Sketch-Datei für Moorhuhn

let debug = false;
let manager = new gameManager();

// Datenmaterial
let img_background;
let img_chicken_alive;
let img_chicken_dead;
let img_chicken_alive_2;
let img_chicken_dead_2;
let img_bullet;
let snd_background;
let snd_big_chicken_appears;
let snd_big_chicken_shot;
let snd_chicken_hit_close;
let snd_chicken_hit_far;
let snd_chicken_hit_mid;
let snd_gun_reload;
let snd_gun_fire;
let snd_gun_empty;

// Objekte
let chickens = [];

function preload(){
  //Load images
  img_background = loadImage("material/meadow.jpg");
  img_chicken_alive = loadImage("material/chicken1.png");
  img_chicken_alive_2 = loadImage("material/chicken2.png");
  img_chicken_dead = loadImage("material/chickenDead.png");
  img_chicken_dead_2 = loadImage("material/chickenDead2.png");
  img_bullet = loadImage("material/bullet.png");

  //Load sounds
  snd_background = loadSound("material/sfx_background_birds_STEREO_LOOP.wav");
  snd_big_chicken_appears = loadSound("material/sfx_big_chicken_pops_up.wav");
  snd_big_chicken_shot = loadSound("material/sfx_big_chicken_shot.wav");
  snd_chicken_hit_close = loadSound("material/sfx_chicken_shot_CLOSE.wav");
  snd_chicken_hit_far = loadSound("material/sfx_chicken_shot_FAR.wav");
  snd_chicken_hit_mid = loadSound("material/sfx_chicken_shot_MID.wav");
  snd_gun_reload = loadSound("material/sfx_gun_reload.wav");
  snd_gun_fire = loadSound("material/sfx_shotgun_blast.wav");
  snd_gun_empty = loadSound("material/sfx_typename_click.wav");
}

function setup() {
  createCanvas(1200,700);
  masterVolume(0);
}

function draw() {
  background(51);
  image(img_background,0,0,1200,700);
  if(!snd_background.isPlaying()){
    snd_background.play();
  }

  if(random(1) < 0.005){
    chickens.push(new Chicken( random(["FRONT","MIDDLE","BACK"]) , random(["RIGHT_TO_LEFT","LEFT_TO_RIGHT"]) ) );
  }

  for(let i=chickens.length-1; i >= 0; i--){
    chickens[i].update();
    chickens[i].show();
    if(chickens[i].offScreen()){
      chickens.splice(i,1);
    }
  }

  image(img_bullet,0,550,105,122.5);
  image(img_bullet,30,550,105,122.5);
  image(img_bullet,60,550,105,122.5);
  image(img_bullet,90,550,105,122.5);
  image(img_bullet,120,550,105,122.5);
  image(img_bullet,150,550,105,122.5);
  image(img_bullet,180,550,105,122.5);
  image(img_bullet,210,550,105,122.5);
  image(img_bullet,240,550,105,122.5);
}

function mousePressed(){
  snd_gun_fire.play();
  for(let i=chickens.length-1; i >= 0; i--){
    if(chickens[i].hits(mouseX,mouseY)){
      chickens[i].alive = false;
    }
  }
}

function keyPressed(){
  if(keyCode == '32'){
    //Spacebar
    snd_gun_reload.play();
  }
}
