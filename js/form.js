  class Form {
    constructor() {
      this.input = createInput("Name:");
      this.button = createButton("Play");
      this.greeting = createElement('h3');  
    }
  
  
    display(){
      var title = createElement('h2')
      title.html("Multipalyer Car Racing Game");
      title.position(350, 100);

      

      this.input.position(450, 200);
      this.button.position(480, 230);
  
      this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
  
        player.name = this.input.value();
        
        playerCount =playerCount +1 ;
        player.index = playerCount
        player.update(player.name)
        player.updateCount(playerCount);
        
        this.greeting.html("Hello " + player.name )
        this.greeting.position(450, 160)
      });
  
    }

    hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
    }
  }
  
  