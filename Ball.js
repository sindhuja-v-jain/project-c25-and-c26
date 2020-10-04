class Ball {
    constructor(x, y,radius) {
      
    
     var options={isStatic: false
       ,restitution: 0.5,
    friction: 0.7,
  density: 0.7}

      this.body = Bodies.circle(x, y, radius,options );
      this.radius=radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill('yellow')
      //rectMode(CENTER)
     // circle(0, 0, this.radius);
image(this.image,0,0,this.radius)
      pop();
    };
   
  };
  
  
