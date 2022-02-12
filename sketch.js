var sea,ship;
var seaImg,shipImg;
var edge;
var walltop, wallbottom;

function preload(){
  //uncomment the code to add animation to ship 

  // shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
  edge = createEdgeSprites();
}

function setup(){
  createCanvas(400,400);
  background("blue");

  walltop = createSprite(200,130,400,5)
  wallb = createSprite(200,370,400,5)

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if(keyDown("space")){
    ship.velocityY = 5;
  }
  ship.velocityY = ship.velocityY - .5;
  
  ship.collide(walltop);
  ship.collide(wallb);

  //uncomment code to reset the background
  if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }

  console.log(sea.width)
 
  drawSprites();
}