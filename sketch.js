const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var t0,t1,t2,t3,t4;
var engine,world;
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame =0;
function preload(){
    t1 = loadImage("thunderbolt/1.png")
    t2 = loadImage("thunderbolt/2.png")
    t3 = loadImage("thunderbolt/3.png")
    t4 = loadImage("thunderbolt/4.png")
  
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  createCanvas (400,700);
  umbrella = new Umbrella(200,500);
  if (frameCount%150===0){
      for(var i = 0; i <maxDrops; i++ ){
      drops.push(new Drop(random(0,400),random(0,400)));
      }

  }
}

function draw(){
    Engine.update(engine);
    background(0);
    rand = Math.round(random(1,4));
    if (frameCount%80===0){
        thunderCreatedFrame = frameCount;
        t0 = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:t0.addImage(t1);
            break;
            case 2:t0.addImage(t2);
            break;
            case 3:t0.addImage(t3);
            break;
            case 4:t0.addImage(t4);
            break;
            default:break;
        }
        t0.scale = random(0.3,0.6);
    }
    if (thunderCreatedFrame+10===frameCount && t0){
        t0.destroy();
    }
    umbrella.display();
    for (var i = 0; i <maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   

