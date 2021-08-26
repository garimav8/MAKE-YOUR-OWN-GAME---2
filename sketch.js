var backgroundImg
var unicornImg
var unicorn
var branch1
var branch2
var branch3

function preload(){
  backgroundImg = loadImage("images/bg image.png")
  unicornImg = loadAnimation("images/unicorn1.jpg","images/unicorn2.jpg","images/unicorn3.jpg")
  gold1Img = loadImage("images/gold1.png")
  branch1Img = loadImage("images/branch1.png")
  branch2Img = loadImage("images/branch2.png")
  branch3Img = loadImage("images/branch3.png")
  flowerImg = loadImage("images/flower.png")
  cloudImg = loadImage("images/cloud.png")
}

function setup(){
    createCanvas(1300,600)

    unicorn = createSprite(100,400,10,10)
    unicorn.addAnimation("unicorn",unicornImg)
    unicorn.scale = 0.5

  //  gold1 = createSprite(300,300,10,10)
   // gold1.addImage("gold1",gold1Img)
   // gold1.scale = 0.1

   // flower = createSprite(700,400,10,10)
   // flower.addImage("flower",flowerImg)
    //flower.scale = 0.6

  //  cloud = createSprite(700,200,10,10)
   // cloud.addImage("cloud",cloudImg)
   // cloud.scale = 0.6

    //branchGroup = new Group();
}

function draw(){
  background(backgroundImg)

  if(keyDown("SPACE")){
      unicorn.velocityY  = -6
     // unicorn.velocityX = 2
  }

  //unicorn.collide(branch1,branch2,branch3)
  unicorn.velocityY = unicorn.velocityY +1

  spawnlogs()
   
  drawSprites();
  
}

function spawnlogs(){
 if(frameCount%200 === 0){
   branch1 = createSprite(1000,560,150,50)
   branch1.addImage("branch1",branch1Img)
   branch1.scale = 2
   branch1.velocityX = -5
  }

  if(frameCount%977 === 0){
   branch2 = createSprite(1000,560,150,50)
   branch2.addImage("branch2",branch2Img)
   branch2.scale = 2
   branch2.velocityX = -5
  }
  if(frameCount%595 === 0){
   branch3 = createSprite(1000,560,150,50)
   branch3.addImage("branch3",branch3Img)
   branch3.scale = 2
   branch3.velocityX = -5
   //branchGroup.add(branch1,branch2,branch3)
  }
     
}