const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var ball1
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    ball1 = new ball(250,250,60,60);
    rope1= new rope (ball1.body,{x:700,y:50})
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box(810,140,70,70);
    box7 = new Box(810,120,70,70);


    //log6 = new Log(230,180,80, PI/2);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ball1.display();
    rope1.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY})

}
