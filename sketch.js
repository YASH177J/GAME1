var titleScreen,background1
var brotherIMG1,brotherIMG2
var title,start,startButton
var bgIMG2,bg2;
var Brother;
var image,image2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
 
  background1=loadImage("BG IMAGE1 (2).png")
  startButton=loadImage("startButton.jpg")
  LoadingIMG=loadImage("Loading.jpg")
  bg2=loadImage("bg2 (2).jpg")
  brotherIMG1=loadAnimation("big bro 1.png","walking IMG2.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2+30,displayHeight/2-130)
    bg.addAnimation("image",background1)
    bg.addAnimation("image2",bg2)
    bg.scale=0.3/1.12

    Start=createSprite(displayWidth/2,displayHeight/2+50)
    Start.addImage(startButton)
    Start.scale=0.8
   
}

function draw(){
background("white")

   if(mousePressedOver(Start)){
    
    bg.changeAnimation("image2",bg2)
    
    start.visible=false
 
   }
  
   drawSprites();
  

}


  
