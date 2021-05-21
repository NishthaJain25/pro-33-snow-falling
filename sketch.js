var bgi;
var sw1,sw2;
var sw1i,sw2i;


function preload(){
bgi.loadAnimation("snow1.png","snow2.png","snow3.png");
sw1i = loadImage("snow4.webp");
sw2i = loadImage("snow5.webp");


}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  sw1 = createSprite(400,200,10,10);
  sw1.addImage("im",sw1i);

  sw2= createSprite(400,200,10,10);
  sw2.addImage("img",sw2i)

}

function draw() {
  if(bgi)
  background(bgi);  
  drawSprites();
}