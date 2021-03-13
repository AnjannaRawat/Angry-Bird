class String {

    constructor(BodyA,BodyB){
        var options ={
            bodyA:BodyA,
            bodyB:BodyB,
            length:5,
            stiffness:0.05,
    
        }
      this.string = Constraint.create(options)
        World.add (world,this.string)
    }
    display(){
        var A=this.string.bodyA.position;
        var B=this.string.bodyB.position;
        strokeWeight(5)
        line(A.x,A.y,B.x,B.y); 
        

    }
}