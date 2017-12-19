function convertSeconds(s){
  return str(nf(floor(s/60),1)) + ":" + str(nf(s % 60,2));
}