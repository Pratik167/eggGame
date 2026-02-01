class Bucket {
  constructor(ctx,canvas){
    this.ctx=ctx;
    this.canvas=canvas;

    this.position={
      x:450,
      y:440,
    };

    this.size={
      width:60,
      height:60,
    };

    this.maxSpeed=3;
    this.velocityX=0;
    this.acceleration=2;
    this.friction=0.85;

    this.image=new Image();
    this.image.src="bucket.png";
  }

  update(Keys) {

    if (Keys["a"]||Keys["A"]||Keys["ArrowLeft"]) {
      this.velocityX-=this.acceleration;
    }

    if (Keys["d"] || Keys["D"] || Keys["ArrowRight"]) {
      this.velocityX += this.acceleration;
    }

    this.velocityX=Math.max(
      -this.maxSpeed,
      Math.min(this.maxSpeed,this.velocityX)
    );
    this.position.x+=this.velocityX;

    //friction for smooth stop
    this.velocityX *= this.friction;

    if(this.position.x<0){
      this.position.x=0;
      this.velocityX=0;
    }

    if(this.position.x>this.canvas.width-this.size.width){
      this.position.x=this.canvas.width-this.size.width;
      this.velocityX=0;
    }
  }

  draw(){
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

export default Bucket;
