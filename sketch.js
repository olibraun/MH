//Sketch-Datei für Moorhuhn
let debug = false;
let manager;

// Datenmaterial
let img_background;
let img_chicken_alive;
let img_chicken_dead;
let img_chicken_alive_2;
let img_chicken_dead_2;
let img_chicken_huge;
let img_bullet;

let snd_background;
let snd_song;
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
  loadImages();
  loadSounds();
}

function setup() {
  createCanvas(1200,700);
  manager = new gameManager();
  masterVolume(0);
}

function draw() {
  manager.update();
  manager.show();

  // image(img_bullet,0,550,105,122.5);
  // image(img_bullet,30,550,105,122.5);
  // image(img_bullet,60,550,105,122.5);
  // image(img_bullet,90,550,105,122.5);
  // image(img_bullet,120,550,105,122.5);
  // image(img_bullet,150,550,105,122.5);
  // image(img_bullet,180,550,105,122.5);
  // image(img_bullet,210,550,105,122.5);
  // image(img_bullet,240,550,105,122.5);
}

function mousePressed(){
  manager.mouseAction();
}

function keyPressed(){
  if(keyCode == '32'){
    //Spacebar
    snd_gun_reload.play();
  }
}
