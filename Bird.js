class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
    
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.speed > 10 && this.body.position.x > 200){
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
    //console.log(this.trajectory);
    }
    for(var index=0; index< this.trajectory.length; index++){
      var currx = this.trajectory[index][0];
      var curry = this.trajectory[index][1];
      image(this.smokeImage, currx, curry);
    }
  
    


    super.display();
  }
}
