class Umbrella{
  constructor(x,y){
      var options = {
         isStatic:true,
         
          
            
        }
        this.body = Bodies.circle(x, y,5, options);
        this.radius =5; 
        World.add(world, this.body);
        this.image = loadImage("walking_1.png")
      }
      display(){
        var pos =this.body.position;
        
        
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);
        
        
      }
  
  
  }
        
    
