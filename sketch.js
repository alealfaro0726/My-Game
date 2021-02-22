const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2, BlockBlue1
var BlockPink1, BlockPink2
var BlockBlue8


var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(130, 170, 220, 20);
  ground2 = new Ground(350,280,100,20);
  ground3 = new Ground(220,220,100,20);
  ground4 = new Ground(500,320,100,20);
  ground5 = new Ground(580,385,90,10);
  ground6 = new Ground(660,350,10,40);
  ground7 = new Ground(580,350,10,40);

  BlockBlue1 = new Box(200, 122, 20, 20);

  BlockPink1 = new BoxPink(201, 2, 20, 20);
  BlockPink2 = new BoxPink(220, 2, 20, 20);
  BlockBlue8  = new Box(202, 122, 20, 20);


  polygon_1 = new poly(110, 100, 20, 20);

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();

    text("Hit the Box hard so it could go down all platforms",300,20);
    text("Careful! Boxes may fall through some parts of platforms or land on invisible ones:)", 220,40)
    text("Try and get the box into the net",350,60)


  BlockBlue1.display();

  BlockPink1.display ();

  BlockPink2.display ();
  BlockBlue8.display ();

  polygon_1.display();

 
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}
