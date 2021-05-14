class Ground{
 constructor(x,y,width, height){
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic: true});
     World.add(world, this.body);
 }
 display(){
     var pos = this.body.position;
     rectMode(CENTER);
     fill('white');
     //strokeWeight(3);
    //stroke('green');
     rect(pos.x, pos.y, this.width, this.height);
 }
}