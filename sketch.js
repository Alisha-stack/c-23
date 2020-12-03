const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//var ground1;
var engine, world;
var ground, ball;
var box2;
var box3;
var box1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    // var ball_options ={
    //     restitution: 1.0
    // }

    // ball = Bodies.circle(200,100,20, ball_options);
    // World.add(world,ball);
box1=new Box(250,100,50,50);
box2=new Box(270,10,50,50);
box3=new Box(270,10,50,50);

//ground1=new Ground();

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
box1.display();
box2.display();
box3.display();


//ground1.display();
    // ellipseMode(RADIUS);
    // ellipse(ball.position.x, ball.position.y, 20, 20);
}