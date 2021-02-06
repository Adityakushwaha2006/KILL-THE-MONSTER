class box{
    constructor (x,y,width,height){
        var box_options={
            'restitution':0.6,
            'friction':1,
            'density':0.2

        }
        
    this.body=Bodies.rectangle(x,y,width,height,box_options);
    this.width=width;
    this.height=height;
    
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
    fill(0,0,0);
    pop();


   
}
}