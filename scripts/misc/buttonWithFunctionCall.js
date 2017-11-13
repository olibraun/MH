class myFunctionButton extends myButton{
  constructor(x,y,msg,f){
    super(x,y,msg);
    this.f = f;
  }

  executeFunction(){
    (this.f)();
  }

  action(x,y){
    if(this.hits(x,y)){
      this.executeFunction();
    }
  }
}
