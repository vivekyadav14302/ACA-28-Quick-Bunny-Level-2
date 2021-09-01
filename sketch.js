function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(570,600);
  player = createSprite(50,550,32,36);
  finish = createSprite(520,50,50,40);
  brick1 = createSprite(10,400,100,19);
  brick2 = createSprite(150,400,100,19);
  brick3 = createSprite(290,400,100,19);
  brick4 = createSprite(431,400,100,19);
  brick5 = createSprite(571,400,100,19);
  brick6 = createSprite(70,340,100,17);
  brick7 = createSprite(213,340,100,17);
  brick8 = createSprite(500,340,100,17);
  brick9 = createSprite(353,340,100,17);

  player.shapeColor = "white";
  finish.shapeColor = "yellow";
  brick1.shapeColor = "red";
  brick2.shapeColor = "red";
  brick3.shapeColor = "red";
  brick4.shapeColor = "red";
  brick5.shapeColor = "red";
  brick6.shapeColor = "red";
  brick7.shapeColor = "red";
  brick8.shapeColor = "red";
  brick9.shapeColor = "red";

  snakeGroup = new Group()
  
}

function draw() {
  background("darkgreen");  
  if(keyDown("left")){
    player.x = player.x-10
  }
  if(keyDown("right")){
    player.x = player.x+10
  }
  if(keyDown("up")){
    player.y = player.y-10
  }
  if(keyDown("down")){
    player.y = player.y+10
  }
  
  


  if(player.isTouching(finish)){
    textSize(40)
    text("You Win !!!", 100,100)
    
  }




  if(player.isTouching(brick1)){
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick2)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick3)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick4)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick5)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick6)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick7)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick8)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(player.isTouching(brick9)){
    textSize(40)
    player.x = 40;
    player.y = 550;
    
  }

  if(frameCount%30 === 0){
    var snake = createSprite(600,random(70,520),random(30,120),5);
    snake.velocityX = -5;
    snake.lifetime = 200;
    snakeGroup.add(snake)
    snake.shapeColor = "yellow"
}

for(var i = 0; i< (snakeGroup).length ; i++){
  var temp = (snakeGroup).get(i);
  if(player.isTouching(temp)){
    player.x = 40;
    player.y = 550;
  }
}
 
  drawSprites()
}


