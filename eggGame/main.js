import Egg from "./egg.js";
import Bucket from "./bucket.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const score= document.getElementById("score");
const life=document.getElementById("life");
const bucket = new Bucket(ctx,canvas);
const egg=new Egg(ctx);


let count=0;
score.textContent="Score:"+count;
let lives=5;
life.textContent="Lives:"+lives;


function eggLoop(){
    requestAnimationFrame(eggLoop);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    egg.update();
    if(egg.position.y+egg.size.height>=500)
    {
      lives--;
      life.textContent="Lives:"+lives;
      if(lives==0)
      {
        count=0;
        lives=5;
        life.textContent="Lives:"+lives;
        egg.speed=1;
        score.textContent="Score:"+count;
      }
      egg.playMusic();
      egg.position.y=0;
      egg.position.x=10+Math.floor(Math.random()*970);
      egg.update();
      
    }
    
    if((egg.position.y+egg.size.height)>=bucket.position.y&&
    (egg.position.y)<bucket.position.y&&
    (egg.position.x+egg.size.width)>=bucket.position.x+30&&
    (egg.position.x+egg.size.width)<=bucket.position.x+bucket.size.width+10)
    {
      playMusic();
      egg.position.y=0;
      egg.position.x=10+Math.floor(Math.random()*970);
      egg.update();
      count++;
      score.textContent="Score:"+count;
      if(count==3)
      {
        egg.speed+=1;
      }
      
    }
    egg.draw();
    bucket.draw();
}
eggLoop();


document.addEventListener("keydown",(event)=>{
  if(event.key=="a")
    {
      bucket.moveLeft();
    } 
  if (event.key=="d") 
    {
      bucket.moveRight();
    }
  if(event.key=="i")
  {
    egg.speed+=1;
  }
});


function playMusic(){
  let  audio=new Audio("1.mp3");
  audio.play()
}