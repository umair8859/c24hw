const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    tank1 = new tank(150,320);

    ground1=new Ground(200, 380, 400, 20);

}

function draw(){
    background(255);
    Engine.update(engine);
    tank1.display();
    ground1.display();

   
}