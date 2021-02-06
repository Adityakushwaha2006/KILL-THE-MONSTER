
var superhero,bkimg,engine,world,B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B17,B18,B19,B20,ground,rope,mnst;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
bkimg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
 
	engine = Engine.create();
  world = engine.world;
  
superhero= new ball(200,400,150);

B1= new box(900,100,70,70);
B2= new box(900,100,70,70);
B3= new box(900,100,70,70);
B4= new box(900,100,70,70);
B5= new box(900,100,70,70);
B6= new box(900,100,70,70);
B7= new box(800,100,70,70);
B8= new box(800,100,70,70);
B9= new box(800,100,70,70);
B10= new box(800,100,70,70);
B11= new box(800,100,70,70);
B12= new box(800,100,70,70);
B13= new box(700,100,70,70);
B14= new box(700,100,70,70);
B15= new box(700,100,70,70);
B16= new box(700,100,70,70);
B17= new box(700,100,70,70);
B18= new box(700,100,70,70);
B19= new box(700,100,70,70);
B20= new box(700,100,70,70);
ground1=new gr(650,750,900,80);
ground=new gr(1050,550,100,10);
mnst= new box1(1050,500,50,200);
rope= new slingshot(superhero.body,{x:300,y:50});

  Engine.run(engine);
}

function draw() {
  background(bkimg);
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  B6.display();
  B7.display();
  B8.display();
  B9.display();
  B10.display();
  B11.display();
  B12.display();
  B13.display();
  B14.display();
  B15.display();
  B16.display();
  B17.display();
  B18.display();
  B19.display();
  B20.display();
  
  ground1.display();
  superhero.display();
  mnst.display();
}


function mouseDragged(){
    
   Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}

