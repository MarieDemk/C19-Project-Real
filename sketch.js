var coral1, coral2, coral3;
var coral1Img, coral2Img, coral3Img;
var coralGroup;
var sharkImg, shark;
var fishImg, fish;
var score = 0;
var gameState = "initial";

function preload(){
backgroundImg = loadImage("oceanbackground.jpg");
sharkImg = loadImage("shark.png");
coral1Img = loadImage("coral1.png");
coral2Img = loadImage("coral2.png");
coral3Img = loadImage("coral3.png");
fishImg = loadImage("fish.png");
}

function setup() {
    background = createSprite(300,200);
    background.addImage(backgroundImg);
    background.scale = 0.6;

    coralGroup = new Group();

    shark = createSprite(100,200,50,20);
    shark.addImage(sharkImg);
    shark.scale = 0.2;
    shark.collider

    fish = createSprite(500,200,50,20);
    fish.addImage(fishImg);
    fish.scale = 0.2;

}

function draw() {
 createCanvas(600,400);
 
 if (gameState == "initial") {
    if (keyDown("space")) {
        gameState = "play";
    }

 }


 if (gameState == "play") {
    background.velocityX = -6;
    if (background.x < 50) {
        background.x = 400;
    }
    score = score + Math.round(getFrameRate() / 30);
    if (keyDown("space")) {
        shark.velocityY = -23;
    }
    shark.velocityY = shark.velocityY + 2.8;
    
    if (shark.y < 50) {
        shark.y = 50;
        fish.y = 50;
    }
    if (shark.y > 350) {
        shark.y = 350;
        fish.y = 350;
    }
    fish.y = shark.y;
    corals()
    if (shark.isTouching(coralGroup)) {
        gameState = "end";
    }  
 }


 if (gameState == "end") {
    shark.destroy();
    fish.destroy();
    coralGroup.destroyEach();

    background.velocityX = 0;
 }
 
 
 drawSprites();
 fill("white");
 textSize(17);
 text("Score:"+score,470,20);
}

function corals() {
    if(frameCount % 80 == 0) {
        coral = createSprite(600,160,20,60);
        coral.y = Math.round(random(1,350))
        coral.velocityX = -6;
       // cf = cf - Math.round(score / 20);
        coral.scale = 0.25;
        coral.lifetime = 200;
        coralGroup.add(coral);
        //coral.depth = restart.depth - 1;
        var numbers = Math.round(random(1,3));
        switch (numbers) {
          case 1: coral.addImage(coral1Img);
          break;
          case 2: coral.addImage(coral2Img);
          break;
          case 3: coral.addImage(coral3Img);
          break;
          default: 
          break;
        }
      }
}
