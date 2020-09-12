
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stoneImg,treeImg,boyImg,mangoImg;
var stone,tree,ground,boy;
var mango1;
var slingShot;

function preload()
{
	
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
	



}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,600,40,20);
	boy.addImage(boyImg)
	boy.scale=0.1;
	
	
	tree=createSprite(670,400,70,30);
	tree.addImage(treeImg)
	tree.scale=0.4;
	
	mango1=new Mango(670,200);
	mango1.scale=1;
	
	
	
	

	stone=new Stone(150,520);
	stone.scale=0.2;

	slingShot = new SlingShot(stone.body,{x:250,y:520});

	
	


	
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  //Engine.run(engine);
  tree.display();
  mango1.display();
  boy.display();
stone.display();
slingShot.display();

  
  
  //drawSprites();
 
}

function mouseDragged(){
    Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}




