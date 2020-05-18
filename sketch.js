var movingRect,fixedRect;
var gameOb1,gameOb2;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 100, 50, 50);
  movingRect=createSprite(400,300,100,20);
  
  gameOb1=createSprite(200,100,50,50)
  gameOb2=createSprite(200,300,50,50)

  movingRect.velocityY=-5;
  fixedRect.velocityY=5;

  gameOb1.velocityY=5;
  gameOb2.velocityY=-5;

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(0);
  
  BounceOff(gameOb1,gameOb2);
  BounceOff(fixedRect,movingRect)

  drawSprites();
}
