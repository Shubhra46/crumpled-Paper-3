
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var launcher1;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	  ground = new Ground(400,680,800,20);
    dustbin= new Dustbin(600,680);
    paper = new Paper(120,450,50,50);
    launcher1 = new launcher(paper.body, {x: 70, y:420})
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  
  ground.display();
  dustbin.display();
  paper.display();
  launcher1.display();
  
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher1.fly();
}


  


  




