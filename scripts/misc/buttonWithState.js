class myButtonWithState extends myButton{
  constructor(x,y,msg){
    super(x,y,msg);
    this.state = true;
  }

  deactivate(){
    this.state = false;
    this.col = color(160,160,160);
  }
}
