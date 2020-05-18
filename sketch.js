var red, blue, green, wall1, wall2, wall3, weight1, weight2, weight3, deformation1, deformation2, deformation3;

function setup() {

  createCanvas(400,400);

  red = createSprite(100, 100, 10, 10);
  red.shapeColor = "red";
  weight1 = 1000;
  red.velocityX = 50;

  blue = createSprite(100, 200, 10, 10);
  blue.shapeColor = "blue";
  weight2 = 3000;
  blue.velocityX = 25;

  green = createSprite(100, 300, 10, 10);
  green.shapeColor = "green";
  weight3 = 50;
  green.velocityX = 10;
  
  wall1 = createSprite(300, 100, 10, 50);
  wall2 = createSprite(300, 200, 10, 50);
  wall3 = createSprite(300, 300, 10, 50);

}

function draw() {

  background(250);  

  red.collide(wall1);
  blue.collide(wall2);
  green.collide(wall3);

  if (red.x-wall1.x<(red.width+wall1.width)/2) {
   deformation1 = 0.5*weight1*red.velocityX*red.velocityX/22500;
  } else if (isTouching(blue,wall2)) {
   deformation2 = 0.5*weight2*blue.velocityX*blue.velocityX/22500;
  } else if (isTouching(green, wall3)) {
   deformation3 = 0.5*weight3*green.velocityX*green.velocityX/22500;
  }

  if (deformation1<80) {
    var Text1 = text("Good", 100, 200);
  } else if (deformation1>80 && deformation1<180) {
    var Text2 = text("Average", 100, 200);
  } else if (deformation1>180) {
    var Text3 = text("Lethal", 100, 200);
  }

  if (deformation2<180) {
    var Text4 = text("Good", 200, 200);
  } else if (deformation2>80 && deformation2<180) {
    var Text5 = text("Average", 200, 200);
  } else if (deformation2>180) {
    var Text6 = text("Lethal", 200, 200);
  }

  if (deformation3<100) {
    var Text7 = text("Good", 300, 200);
  } else if (deformation3>80 && deformation3<180) {
    var Text8 = text("Average", 300, 200);
  } else if (deformation3>180) {
    var Text9 = text("Lethal", 300, 200);
  }
  
  drawSprites();

}