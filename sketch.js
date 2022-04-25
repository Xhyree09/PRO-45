var bg
var ig
var girl
var play = 1
var end = 0
var gameState = play
var ghost,runningghost

function preload(){
bg = loadImage("images/forest.jpg");
girl = loadAnimation("images/girl/title00.png","images/girl/title01.png","images/girl/title02.png","images/girl/title03.png","images/girl/title04.png","images/girl/title05.png","images/girl/title06.png","images/girl/title07.png")
runningghost = loadAnimation("images/ghost/tile000.png","images/ghost/tile001.png","images/ghost/tile002.png","images/ghost/tile003.png","images/ghost/tile004.png")
rain1 = loadAnimation("images/obs/tile000.png","images/obs/tile001.png","images/obs/tile002.png","images/obs/tile012.png")
rain2 = loadAnimation("images/obs/tile006.png","images/obs/tile007.png","images/obs/tile008.png","images/obs/tile031.png")
rain3 = loadAnimation("images/obs/tile009.png","images/obs/tile010.png","images/obs/tile011.png")
rain4 = loadAnimation("images/obs/tile057.png","images/obs/tile058.png","images/obs/tile059.png","images/obs/tile070.png","images/obs/tile071.png")
}

function setup(){
createCanvas(1200,800);
ig = createSprite(600,800,1200,100);
ig.visible = false;

runninggirl = createSprite(500,700,50,100);
runninggirl.addAnimation("running",girl)
}

function draw(){


background(bg);
if (gameState === play){
 //ig.velocityX = -4
 if (ig.x<0){
     ig.x = ig.width/2
 }
 if (keyDown("space")&& runninggirl.y>=200){
     runninggirl.velocityY = -13 
 }
 runninggirl.velocityY = runninggirl.velocityY+0.8
 if (keyDown("LEFT_ARROW")){
     runninggirl.x = runninggirl.x-5
 }
 if (keyDown("RIGHT_ARROW")){
    runninggirl.x = runninggirl.x+5
}
 spawnobs();
}
else if (gameState === end){

}
runninggirl.collide(ig)
drawSprites();
}

function spawnobs(){
if(frameCount %350===0){
    var ghost = createSprite(1250,700,50,50)
    ghost.velocityX = -4 
    ghost.scale = 3
    ghost.addAnimation("run",runningghost)

    var fireball1 = createSprite(50,-10,20,20)
    fireball1.scale = 3
    fireball1.velocityY = 4
    fireball1.addAnimation("r1",rain1)

    var fireball2 = createSprite(400,-10,20,20)
    fireball2.scale = 3
    fireball2.velocityY = 4
    fireball2.addAnimation("r2",rain2)

    var fireball3 = createSprite(750,-10,20,20)
    fireball3.scale = 3
    fireball3.velocityY = 4
    fireball3.addAnimation("r3",rain3)

    var fireball4 = createSprite(1100,-10,20,20)
    fireball4.scale = 3
    fireball4.velocityY = 4
    fireball4.addAnimation("r4",rain4)
}
}