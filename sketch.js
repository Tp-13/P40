var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}