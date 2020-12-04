class rope {
    constructor (bodyA, pointB ){
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.2,
          length:250
      }
    this.pointB = pointB
    this.rope = Constraint.create(options)
    World.add (world,this.rope)

    }
attatch(body){
   this.rope.bodyA = body  
}
fly(){
    this.rope.bodyA = null
}
display(){
    line(this.pointB.x, this.pointB.y, this.rope.bodyA.position.x, this.rope.bodyA.position.y)
}
}
