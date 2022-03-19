
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


xhao = new chão(400,699.93421,800,20)
bara1 = new chão(650,699,10,200)
bara2 = new chão(750,699,10,200)
bola = Bodies.circle(100,555,10)
   World.add(world,bola)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 xhao.display()
 bara1.display()
 bara2.display()
 ellipseMode(RADIUS)
 ellipse(bola.position.x,bola.position.y,10)




}


function keyPressed() { if (keyCode == 32) { Matter.Body.applyForce(bola,bola.position,{x:85,y:-85}); } }


