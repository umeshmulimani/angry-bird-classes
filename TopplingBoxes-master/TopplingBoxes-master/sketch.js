const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var LOG1,LOG2,LOG3,LOG4;
var bird2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(810,350);
    pig2 = new pig(810,220);
    LOG1 = new LOG(810,260,300,PI/2);
    LOG2 = new LOG(810,180,300,PI/2);
    LOG3 = new LOG(760,120,150,PI/7);
    LOG4 = new LOG(870,120,150,-PI/7);
    bird2 = new bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
     pig2.display();
    LOG1.display();
    LOG2.display();
    LOG3.display();
    LOG4.display();
    bird2.display();
}
