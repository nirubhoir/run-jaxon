var Runner,path,power,coin,bomb;
var RunnerImg,pathImg,powerImg,coinImg,bombImg;
function preload(){
  //pre-load images

RunnerImg = loadImage("Runner-1.png","Runner-2.png")



pathImg = loadImage("path.png")
powerImg = loadImage("power.png")
coinImg = loadImage ("coin.png")
bombImg = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite (200,200)

 
 
 

  Runner = createSprite (200,300)
  Runner.scale=0.1

  



}

function draw() {
  background(100);

  Runner.addImage(RunnerImg)
  path.addImage(pathImg)
 
 
 

 spawnpower();
 spawncoin();
 spawnbomb();

drawSprites()
}

function spawnpower() {
if(frameCount%100 === 0){
  power = createSprite (100,100)
  power.scale = 0.2
  power.velocityY=3
  power.addImage(powerImg)
}
}

function spawncoin() {
if(frameCount%150 === 0){
  coin = createSprite(200,100)
  coin.scale = 0.3
  coin.velocityY=3
  coin.addImage(coinImg)
} 
}

function spawnbomb() {
if(frameCount%230 === 0){
  bomb = createSprite(300,100)
  bomb.scale = 0.1
  bomb.velocityY=3
  bomb.addImage(bombImg)
}
}






