class ScoreManager{
  constructor(){
    this.DB = firebase.database();
    this.names_array = [];
    this.scores_array = [];
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

  queryHighscoreFromDB(){
    let ref = this.DB.ref('scores/MH');
    let self = this;
    let ff = ref.once('value').then(function(data){
      let scores = data.val();
      var keys = Object.keys(scores);
      //console.log(keys);
      self.names_array = [];
      self.scores_array = [];
      for(let i = 0; i < keys.length; i++){
        let k = keys[i];
        self.names_array.push(scores[k].name);
        self.scores_array.push(scores[k].score);
      }
    });
  }
}
