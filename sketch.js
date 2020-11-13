const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;
var drops=[];
var um;
var lighting,lighting2,lighting3,lighting4,lighting1;
var drop;

function preload(){
    lighting1=loadImage("1.png")    
    lighting2=loadImage("2.png")
    lighting3=loadImage("3.png")
    lighting4=loadImage("4.png")
}

function setup(){
createCanvas=(600,600)  
engine=Engine.create();
world=engine.world;
if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
        drops.push( new Drops(random(0,400),random(0,400)));
       }
}


um= new Umbrella(200,400)


}

function draw(){
background("black");
Engine.update(engine)
if (frameCount % 90 === 0){
    lighting = createSprite(random(10,370),random(10,250),90,90)
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: lighting.addImage(lighting1)
               break;
       case 2: lighting.addImage(lighting2)
               break;
       case 3:lighting.addImage(lighting3)
           break;
      case 4:lighting.addImage(lighting4)
          break;
      default: break;
              
   
   
     }
     lighting.lifetime=100;
     lighting.scale= random(0.1,0.8);
  }

um.display();
for(var j=0; j<maxDrops; j++){
    drops[j].showDrop()
    drops[j].updateY()
   
}
drawSprites()
}   
