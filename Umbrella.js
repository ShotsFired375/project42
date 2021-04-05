class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images_walking/walking_1.png");
        this.animation = loadAnimation("images_walking/walking_1.png", "images_walking/walking_2.png", "images_walking/walking_3.png", "images_walking/walking_4.png", "images_walking/walking_5.png", "images_walking/walking_6.png", "images_walking/walking_7.png", "images_walking/walking_8.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        
        World.add(world, this.umbrella);
        //load Image for BestMan
        this.batmanImg = loadImage("images_walking/batman.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        
        if(frameCount >= 200) {
            imageMode(CENTER);
            image(this.batmanImg,pos.x,pos.y+70,300,300);
        } else {
            imageMode(CENTER);
            image(this.image, pos.x, pos.y+70, 300, 300);
        }
    }
}
