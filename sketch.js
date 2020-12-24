var car,wall,car1,wall1;
var speed=random(503,721);
var weight=random(30,52); 
var thicknes=randoom(22,83);
var bwall,bwall1;
var car3

function setup() {
  createCanvas(1200,400);
 
  speed=random(10,30);
  weight=random(400,600);
  
 
  car=createSprite(50, 20, 20, 20);
  car.velocityX = speed;
  car.shapeColor=color(255);


  wall=createSprite(1000,200,20,1200);
  wall.shapeColor =color(80,80,80);


  car1=createSprite(50,100, 20,20);
  car1.velocityX = speed;
  car1.shapeColor=color(255);
  
  car2=createSprite(50,230, 20,20);
  car2.velocityX = speed;
  car2.shapeColor=color(255);

  car3=createSprite(50,330, 20,20);
  car3.velocityX = speed;
  car3.shapeColor=color(255);

  bwall=createSprite(150,50,2500,20);
  bwall1=createSprite(150,170,2500,20);
  bwall2=createSprite(150,300,2500,20);
}

function draw() {
  background(0);  
   
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car .velocityX=0;
    var deformation=0.7* weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor= color("red");
    } 
    if(deformation<180 && deformation>100) 
       {
      car.shapeColor= color(230,230,0);
    } 
    if(deformation<100)
    {
      car.shapeColor= color(0,255,0);
    } 
  }

  if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
    car1 .velocityX=0;
    var deformation=0.5* weight * speed * speed/22600;
    if(deformation>140)
    {
      car1.shapeColor= color("white");
    } 
    if(deformation<550 && deformation>100) 
       {
      car1.shapeColor= color(230,230,0);
    } 
    if(deformation<650)
    {
      car1.shapeColor= color(0,265,0);
    } 
  }

  if(wall.x-car2.x < (car2.width+wall.width)/2)
  {
    car2 .velocityX=0;
    var deformation=0.6* weight * speed * speed/22550;
    if(deformation>200)
    {
      car2.shapeColor= color(265,0,19);
    } 
    if(deformation<250 && deformation>100) 
       {
      car2.shapeColor= color(230,230,0);
    } 
    if(deformation<150)
    {
      car2.shapeColor= color(0,265,0);
    } 
  }

  if(wall.x-car3.x < (car3.width+wall.width)/2)
  {
    car3 .velocityX=0;
    var deformation=0.6* weight * speed * speed/22700;
    if(deformation>200)
    {
      car3.shapeColor= color(265,0,19);
    } 
    if(deformation<250 && deformation>100) 
       {
      car3.shapeColor= color(230,230,0);
    } 
    if(deformation<150)
    {
      car3.shapeColor= color(0,265,0);
    } 
  }
  drawSprites();
  

}