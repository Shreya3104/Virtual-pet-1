var dog,dogImg,happydogImg;
var database;
var foods,foodStock;
function preload()
{
  dogImg=loadImage("Dog.png");
  happydogImg=loadImage("happydog.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(400,200,20,20)
  dog.addImage(dogImg);
  dog.scale=0.2

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background("blue")
  if(keyWentDown(UP_ARROW)){
  updateStock(foods)
  dog.addImage(happydogImg)
  }
  drawSprites();
  //add styles here
  
}

  function readStock(data){
    foods=data.val();

  }

  function updateStock(x){
    if(x<=0){
      x=0
    }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
  }

