class Gun{
  constructor(){
    this.ammo = 9;
    this.shells = [];
    this.shells.push( [img_bullet,0,550,105,122.5] );
    this.shells.push( [img_bullet,30,550,105,122.5] );
    this.shells.push( [img_bullet,60,550,105,122.5] );
    this.shells.push( [img_bullet,90,550,105,122.5] );
    this.shells.push( [img_bullet,120,550,105,122.5] );
    this.shells.push( [img_bullet,150,550,105,122.5] );
    this.shells.push( [img_bullet,180,550,105,122.5] );
    this.shells.push( [img_bullet,210,550,105,122.5] );
    this.shells.push( [img_bullet,240,550,105,122.5] );
  }

  fire(){
    //This function "fires the gun", if there is enough ammo
    //That is, it plays the appropriate sound
    //It then reduces the number of ammo, shells displayed and returns an info
    //about whether or not it was able to fire.
    if(this.ammo > 0){
      snd_gun_fire.play();
      this.ammo--;
      return true;
    }else{
      snd_gun_empty.play();
      return false;
    }
  }

  reload(){
    snd_gun_reload.play();
    this.ammo = 9;
  }

  show(){
    for(let i=0; i<this.ammo; i++){
      let temp = this.shells[i];
      image( temp[0], temp[1], temp[2], temp[3], temp[4] );
    }
  }
}
