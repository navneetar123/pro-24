
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper=new Paper(50,200,15);
  box1=new Box(310,250,10,50);
  box2=new Box(350,190,50,10);
  //box3=new Box();
 ground=new Box(400,400,200,10);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  paper.display();
  box1.diaplay();
  box2.diaplay();
  ground.diaplay();

  drawSprites();
 
}
function keypressed(){
  if(keyCode===UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}



