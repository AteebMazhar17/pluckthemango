
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone1;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,690,900,20);
	
	stone1 = new stone(200,50);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  stone1.display();
  drawSprites();
 
}



