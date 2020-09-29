

 var dog,dogImg, happyDog, database, foodS, foodStock 

function preload()
{
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage(" images/happydog.png");
}

function setup() {
  createCanvas(500, 500); 
  database = firebase.database(); 
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.5;
 

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}




function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }

  drawSprites();
  fill(0,0,255);
  textSize(15);
  text("Note: Press UP_ARROW Key to fead The dog Milk ", 20, 30);
  text("FoodStock: "+foodS, 20,70 );
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x,
  })
}



