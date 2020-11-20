var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,200,thickess,height/2);
  wall.shapeColor=color(80,80,80)
}
function draw() {
  background(255,255,255);  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
  return false
}