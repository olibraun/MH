class ScoreManager{
  constructor(){
    this.DB = firebase.database();
  }

  submitScore(){
    let ref = this.DB.ref('scores/MH');
    let score_data = {
      name: "Test Name",
      score: 99
    };
    ref.push(data);
  }
}
