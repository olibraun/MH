function convertSeconds(s){
  return str(nf(floor(s/60),1)) + ":" + str(nf(s % 60,2));
}

function crosshair(x,y){
  push();
  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(3);
  //Zentrales Quadrat
  rect(x,y,10,10);
  //Linien sternförmig vom Quadrat aus
  line(x,y+7,x,y+7+8);
  line(x,y-7,x,y-7-8);
  line(x+7,y,x+7+8,y);
  line(x-7,y,x-7-8,y);
  //Linien parallel zum Quadrat
  line(x-7.5,y+5+2+8+2,x+7.5,y+5+2+8+2);
  line(x-7.5,y-5-2-8-2,x+7.5,y-5-2-8-2);
  line(x+5+2+8+2,y+7.5,x+5+2+8+2,y-7.5);
  line(x-5-2-8-2,y+7.5,x-5-2-8-2,y-7.5);
  pop();
}
