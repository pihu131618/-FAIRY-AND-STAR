var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var star_options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star_options = {
		restitution : 0.9
	  }
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	World.add(world,star_options);
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x = starBody.position.x;
  star.y = starBody.position .y;
 
  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyDown("right")) {
		fairy.velocityX = - 2;
	}
	if(keyDown("left"))
	{
	fairy.velocityX = 2;
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body .setStatic(starBody,false);
	}
	fairyVoice.play();
}
