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
    console.log("DBQuery begin");
    let ref = this.DB.ref('scores/MH');
    console.log(ref);
    let self = this;
    let ff = ref.once('value').then(function(data){
      let scores = data.val();
      if(scores != null){
        var keys = Object.keys(scores);
        //console.log(keys);
        self.names_array = [];
        self.scores_array = [];
        for(let i = 0; i < keys.length; i++){
          let k = keys[i];
          self.names_array.push(scores[k].name);
          self.scores_array.push(scores[k].score);
        }        
      }
    }).then(() => console.log("DBQuery done. Score-Array:")).then(() => console.log(this.scores_array));
  }

  //Primitive order mechanism
  orderHighscore(){
    console.log("begin order with");
    console.log(this.scores_array);
    //Bubble-sort the Highscore-List
    for(let i=0; i<this.scores_array.length; i++){
      for(let j=i+1; j<this.scores_array.length; j++){
        if(this.scores_array[i]>this.scores_array[j]){
          console.log("perform swap");
          swap(this.scores_array,i,j);
          swap(this.names_array,i,j);
        }
      }
    }
    this.scores_array.reverse();
    this.names_array.reverse();
    console.log("end order");
  }
}

function swap(L,i,j){
  let temp = L[i];
  L[i] = L[j];
  L[j] = temp;
}
