

//Create variables here
var dog, happyDog;
var database;
var foodS,foodStock;


function preload() {
  
  dog=loadImage("images/dogImg1.png");
  dogHappy=loadImage("images/dogImg.png");
}

function setup() {

  createCanvas(500,500);

  database = firebase.database() 
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  

  


  
  

 
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dog);


 
  
}


function draw() {  
  background(46,139,87);
 
  
  dog.display();

 
  
  
 


  
  
  drawSprites();
  //add styles here
  Text: "Note: Press UP_ARROW key to feed the dog Milk",120,30;
  textSize(30);
  stroke();
  fill("white");

}

function keyPressed() {
if(keyWentDown(UP_ARROW))
writeStock(foodS);
dog.addImage(dogHappy);

}

function readStock (data) {
foodS=data.val();
}

function writeStock(x) {
if(x<=0){
  x=0;
}else{
x=x-1;
}
database.ref('/').update({
Food: x
})


}