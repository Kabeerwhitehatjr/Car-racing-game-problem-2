class Player {
    constructor(){
      this.Index = null;
      this.name = null;
      this.distance = 0;
     
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
  
    update(name){
      var playerIndex = "Players/player" + this.Index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }

    static getplayersinfo(){
      var PlayerCountRef = database.ref('Players');
      PlayerCountRef.on("value",function(data){
        allPlayers = data.val();
      })
    }
  }


  
    
  