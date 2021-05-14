class fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:450
        }
    
        this.pointB=pointB;
        this.fly=Constraint.create(options)
        World.add(world,this.fly)
    }
    
}