var car,wall;

var speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random (55,90);
  weight = random (400,1500);

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(700, 200, 60, height/2);
  wall.shapecolor =(80,80,80);

}

function draw() {
  background("blue");  

  car.velocityX=speed;

  if (wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX=0;

    var deformation =(0.5*weight*speed*speed)/22500;
    if (deformation>180){
      car.shapecolor= "green";
    }
    if (deformation<180 && deformation>100){
      car.shapecolor= "yellow";
    }
    if (deformation<100){
      car.shapecolor= "red";
    }
    }

  drawSprites();
}
