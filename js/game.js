  class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }

    play(){
      form.hide()
      textSize (40);
      text("GAME STARTED",100,100);

      Player.getplayersinfo();
      var y = 170;
      for(var a in allPlayers){
        y=y+20;
       text(allPlayers[a].name  + ":" + allPlayers[a].distance, 170, y)
      }


      if(keyIsDown(UP_ARROW)&& player.Index !== null){
        player.distance = player.distance + 50;
        player.update();
      }
    }
  
   

    
  
  
  }
  