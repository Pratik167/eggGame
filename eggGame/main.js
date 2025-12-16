import Egg from "./egg.js";
import Bucket from "./bucket.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const bucket = new Bucket(ctx,canvas);
const egg=new Egg(ctx);

function eggLoop(){
    requestAnimationFrame(eggLoop);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    egg.update();
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
});



