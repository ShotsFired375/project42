class Drops {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            friction: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
    }

    update(){
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
        
    }

    display(){
        // var pos = this.rain.position;
        // var angle = this.rain.angle;

        // translate(pos.x, pos.y);
        // rotate(angle);
        stroke("lightblue");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
        
    }
}