class ball{
    constructor (x,y,r){
        var ball_options={
            isStatic:false,
            restitution:0.3,
frictionAir:0.02,
density:0.2
        }
    this.body=Bodies.circle(x,y,r,ball_options);
    this.r=r;
    this.image=loadImage("Superhero-02.png")
    World.add(world,this.body);
    }
display(){

    var pos=this.body.position;

    push ();
    translate(pos.x,pos.y);
  
    ellipseMode(RADIUS);
    ellipse(100,30,200,10);
    strokeWeight(4);
    stroke("green")
    imageMode(CENTER);
    image(this.image, 0, 0, 600, 300);
    fill(0,0,0);
    pop();
}
}

