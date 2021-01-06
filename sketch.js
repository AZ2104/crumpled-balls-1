
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin = new Dustbin(720,390,100,100);
	paper = new Paper(100,300,100);
	ground = Bodies.rectangle(width/2, 400,width,10,
		{
			isStatic: true
		});

    World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();

}

function keyPressed()
{
	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y: -85});
	}
}



