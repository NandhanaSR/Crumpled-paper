class Paper{
    constructor(x, y, r){
        var options = {
            restitution : 0.3,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        image(this.image, this.x, this.y, this.r, this.r);
    }
}