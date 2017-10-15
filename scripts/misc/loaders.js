function loadImages(){
  //Load images
  img_background = loadImage("material/meadow.jpg");
  img_chicken_alive = loadImage("material/chicken1.png");
  img_chicken_alive_2 = loadImage("material/chicken2.png");
  img_chicken_dead = loadImage("material/chickenDead.png");
  img_chicken_dead_2 = loadImage("material/chickenDead2.png");
  img_chicken_huge = loadImage("material/chicken_large.png");
  img_chicken_thumbs_up = loadImage("material/chicken_thumbs.png");
  img_bullet = loadImage("material/bullet.png");
}

function loadSounds(){
  //Load sounds
  snd_background = loadSound("material/sfx_background_birds_STEREO_LOOP.wav");
  snd_song = loadSound("material/chickensong.mp3");
  snd_big_chicken_appears = loadSound("material/sfx_big_chicken_pops_up.wav");
  snd_big_chicken_shot = loadSound("material/sfx_big_chicken_shot.wav");
  snd_chicken_hit_close = loadSound("material/sfx_chicken_shot_CLOSE.wav");
  snd_chicken_hit_far = loadSound("material/sfx_chicken_shot_FAR.wav");
  snd_chicken_hit_mid = loadSound("material/sfx_chicken_shot_MID.wav");
  snd_gun_reload = loadSound("material/sfx_gun_reload.wav");
  snd_gun_fire = loadSound("material/sfx_shotgun_blast.wav");
  snd_gun_empty = loadSound("material/sfx_typename_click.wav");
}

function adjustSounds(){
    snd_gun_fire.setVolume(.5);
    snd_gun_reload.setVolume(.5);
    snd_gun_empty.setVolume(.5);
}
