
var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;


  movingRect=createSprite(400,200,80,40);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect.velocityX=5;
  movingRect.velocityX=-5;
}

function draw() {
  background(255,255,255); 

   //movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

   console.log(movingRect.x-fixedRect.x);
   console.log(movingRect.width/2+fixedRect.width/2);

   if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
   fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 ){
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX=movingRect.velocityX*(-1);

   }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
   }

  drawSprites();
}