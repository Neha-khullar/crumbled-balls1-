
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObject, paperObject,dustbinObject;

function setup() {
	createCanvas(1510,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObject=new Dustbin (1200,650);
	paperObject= new Paper(200,450,40);
	groundObject= new Ground(width/2,670,width,20);




	Engine.run(engine);
  
}
function draw() {
	rectMode(CENTER);
	background(0);
	 dustbinObject.display();
	 paperObject.display();
	 groundObject.display();

   
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-90});
	}

}






