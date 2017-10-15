//Sketch-Datei für Moorhuhn
let debug = false;

// Datenmaterial
let img_background;
let img_chicken_alive;
let img_chicken_dead;
let img_chicken_alive_2;
let img_chicken_dead_2;
let img_chicken_huge;
let img_chicken_thumbs_up;
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

let silly_font;

// Objekte
let manager;

function preload(){
  loadImages();
  loadSounds();
  adjustSounds();
  silly_font = loadFont("material/JandaSillyMonkey.ttf");
}

function setup() {
  createCanvas(1200,700);
  manager = new gameManager();
}

function draw() {
  manager.update();
  manager.show();
}

function mousePressed(){
  manager.mouseAction(mouseX,mouseY);
}

function keyPressed(){
  manager.keyboardAction(keyCode);
}
