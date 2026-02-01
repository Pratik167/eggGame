import Egg from"./egg.js";
import Bucket from"./bucket.js";

const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

const score=document.getElementById("score");
const life=document.getElementById("life");
const eggSpeed=document.getElementById("eggSpeed");
const bucketSpeed=document.getElementById("bucketSpeed");

const bucket=new Bucket(ctx, canvas);
const egg=new Egg(ctx);

const Keys={};

let count=0;
let lives=5;

score.textContent="Score:"+count;
life.textContent="Lives:"+lives;
eggSpeed.textContent="EggSpeed:"+egg.speed;
bucketSpeed.textContent="Speed:"+bucket.maxSpeed;

function eggLoop(){
  requestAnimationFrame(eggLoop);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  egg.update();
  bucket.update(Keys);

  if(egg.position.y+egg.size.height>=canvas.height){
    lives--;
    life.textContent="Lives:"+lives;

    if(lives==0){
      count=0;
      lives=5;
      egg.speed=1;
      bucket.maxSpeed=12;

      score.textContent="Score:"+count;
      life.textContent="Lives:"+lives;
      eggSpeed.textContent="EggSpeed:"+egg.speed;
      bucketSpeed.textContent="Speed:"+bucket.maxSpeed;
    }

    egg.playMusic();
    egg.position.y=0;
    egg.position.x=10+Math.random()*960;
  }
  if(egg.position.y+egg.size.height>=bucket.position.y&&
    egg.position.y<=bucket.position.y&&
    egg.position.x+egg.size.width>=bucket.position.x&&
    egg.position.x<=bucket.position.x+bucket.size.width)
    {
    playMusic();
    egg.position.y=0;
    egg.position.x=10+Math.random()*960;

    count++;
    score.textContent="Score:"+count;

    if (count%5==0){
      egg.speed+=0.5;
      eggSpeed.textContent="EggSpeed:"+egg.speed;

      bucket.maxSpeed+=0.5;
      bucketSpeed.textContent="Speed:"+bucket.maxSpeed;
    }
  }
  egg.draw();
  bucket.draw();
}

eggLoop();
document.addEventListener("keydown",(event)=>{
  Keys[event.key]=true;
});

document.addEventListener("keyup",(event)=>{
  Keys[event.key]=false;
});

function playMusic(){
  const audio=new Audio("1.mp3");
  audio.play();
}
