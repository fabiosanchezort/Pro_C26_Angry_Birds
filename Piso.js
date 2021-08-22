class Piso {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(mundo, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(149, 99, 10);
      stroke(133, 88, 10);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }