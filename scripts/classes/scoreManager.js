class ScoreManager{
  constructor(){
    this.DB = firebase.database();
  }

  queryNameFromUser(){
    let user_name = window.prompt("Gib bitte deinen Namen für die Highscore-Liste ein.","");
    return user_name;
  }

  submitScore(name,score){
    let ref = this.DB.ref('scores/MH');
    let score_data = {
      name: name,
      score: score
    };
    ref.push(score_data);
  }
}
