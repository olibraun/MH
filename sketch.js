//Sketch-Datei für Moorhuhn

function preload(){
  //Load images
  var img_background = loadImage("material/meadow.jpg");
  var img_huhn_alive = loadImage("material/chicken1.png");
  var img_huhn_dead = loadImage("material/chickenDead.png");

  //Load sounds
  var snd_background = loadSound("material/sfx_background_birds_STEREO_LOOP.wav");
  var snd_big_chicken_appears = loadSound("material/sfx_big_chicken_pops_up.wav");
  var snd_big_chicken_shot = loadSound("material/sfx_big_chicken_shot.wav");
  var snd_chicken_hit_close = loadSound("material/sfx_chicken_shot_CLOSE.wav");
  var snd_chicken_hit_far = loadSound("material/sfx_chicken_shot_FAR.wav");
  var snd_chicken_hit_mid = loadSound("material/sfx_chicken_shot_MID.wav");
  var snd_gun_reload = loadSound("material/sfx_gun_reload.wav");
  var snd_gun_fire = loadSound("material/sfx_shotgun_blast.wav");
  var snd_gun_empty = loadSound("material/sfx_typename_click.wav");
}

function setup() {
  createCanvas(1200,700);
}

function draw() {
  background(51);
  image(img_background,0,0,1200,700);
  if(!snd_background.isPlaying()){
    snd_background.play();
  }
}

function mousePressed(){
  //
}
