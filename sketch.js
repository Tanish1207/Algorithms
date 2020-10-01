var movingrect,fixedrect;


function setup() {

  createCanvas(1200,800);
  //fixedrect=createSprite(200,200,50,80);
  fixedrect=createSprite(400,100,50,80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  //movingrect=createSprite(400,200,80,30);
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";
  movingrect.debug=true;
 // movingrect.velocityY=-5;
  //fixedrect.velocityY=5;
}

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  //bounceOff(movingrect,fixedrect);
  if(isTouching(movingrect,fixedrect)) {
    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
   else
   {
     fixedrect.shapeColor="green";
     movingrect.shapeColor="green";
   }
  drawSprites();
}