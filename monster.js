class box1{
    constructor (x,y,width,height){
        var box1_options={
            'restitution':0.6,
            'friction':1,
            'density':0.2

        }
        
    this.body=Bodies.rectangle(x,y,width,height,box1_options);
    this.width=width;
    this.height=height;
    this.image=loadImage("Monster-01.png")
    World.add(world,this.body);
    
    }
display(){



    var pos=this.body.position;

    push ();
    translate(pos.x,pos.y);
  


    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    strokeWeight(4);
    stroke("green")
    imageMode(CENTER);
    image(this.image, 10,-20,250,400);
    fill(0,0,0);
    pop();


   
}
}