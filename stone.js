class Stone  {
    constructor(x,y){
        var stone_options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body=Bodies.rectangle(150,520,50,50,stone_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
     
        this.image = loadImage("stone.png");
        
    }
  
    display() {
        //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
      
       // var angle = this.body.angle;
    //push();
    //translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
        imageMode(CENTER);
        image(this.image,150, 520, 50,50);
        //pop();
    }
  }
  