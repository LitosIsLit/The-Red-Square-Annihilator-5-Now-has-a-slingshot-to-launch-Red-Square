class SlingShot extends BaseClass{
    constructor(bodyA, pointB){
        super(200,50,50,50);
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.image4 = loadImage("sprites/bird-Copy.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1, 200, 20);
        image(this.image2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.image3, pointA.x - 30,pointA.y - 8, 10, 25);}
            else{
            strokeWeight(3);
            super.display()
            line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.image3, pointA.x + 25 ,pointA.y - 8, 10, 25);    
            }
            
        }
    }
    
}