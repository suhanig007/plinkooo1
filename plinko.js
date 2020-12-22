class Plinko {
    constructor(x, y) {
        var options = {
           isStatic: true,
           restitution: 1,
           friction: 0
           
        }
        this.radius = 10
        this.x = x
        this.y = y
        this.body = Bodies.circle(x, y, this.radius, options)
        World.add(world, this.body)   }
     display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y)
        ellipseMode(RADIUS)
        strokeWeight(4)
        var x = Math.round(random(0, 255))
        var y = Math.round(random(0, 255))
        var z = Math.round(random(0, 255))
        stroke(x, y, z)
        fill(x, y, z)
        ellipse(0, 0, this.radius, this.radius)
        pop();
     }
}