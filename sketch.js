const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var drops = [];
var engine, world;
var rand;
var thunderCreatedFrame=0;
var maxDrops=100;

function preload(){
    thunder1 = loadImage("images_thunderbolt/1.png");
    thunder2 = loadImage("images_thunderbolt/2.png");
    thunder3 = loadImage("images_thunderbolt/3.png");
    thunder4 = loadImage("images_thunderbolt/4.png");

    batAnimation = loadAnimation("images_bat/bat1.png","images_bat/bat2.png","images_bat/bat3.png",
    "images_bat/bat4.png","images_bat/bat5.png","images_bat/bat6.png",
    "images_bat/bat7.png","images_bat/bat8.png","images_bat/bat9.png",
    "images_bat/bat10.png","images_bat/bat11.png","images_bat/bat12.png");
   
}


function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
    umbrella.scale=0.01;

    //create drops
    if (   frameCount%190===0) { 
        for (var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
        
        }
    }
}


function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 200 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();
    //display rain drops

    for (var i=0; i<maxDrops; i++){
    //    drops.push(new Drops(random(0,400), random(0,400)));
        drops[i].display();
        drops[i].update();
    }
    

    drawSprites();
}   

