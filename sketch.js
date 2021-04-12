const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,600,70,70);
    box2 = new Box(950,600,70,70);
    pig = new Pig(850,600);
    log1 = new Log(850,530,300,PI/2);
    box3 = new Box(750,500,70,70);
    box4 = new Box(950,500,70,70);
    box5 = new Box(850,500,70,70);
    log2 = new Log(850,450,300,PI/2);
    box6 = new Box(850,400,70,70);
    log3 = new Log(835,390,170,PI/6);
    log4 = new Log(865,390,170,-PI/6);
    ground = new Ground(600,height,1200,20);  
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
    box6.display();
    pig.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
}