class Mango{

	constructor(x,y){
	
		var options={
      isStatic:true,
      restitution:0,
      friction:1
			
		}
		this.x=x;
		this.y=y;
		
    //this.mango=Bodies.circle(this.x, this.y, this.r/2,options)
    this.mango=Bodies.rectangle(x,y,70,70);
    this.image = loadImage("mango.png");
    World.add(world, this.mango);
   
    

	}
	display(){
    //var angle = this.mango.angle;
    //push();
    //translate(this.mango.position.x, this.mango.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,this.mango.x ,this.mango.y, 70,70);
    //pop();
  }
}

