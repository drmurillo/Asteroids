function Ship() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 20;
  this.heading = 0;
  this.vel = createVector(0, 0);

  this.show = function() {
    //Adjusts the width of the ship. Higher value = skinnier ship
    var widthAdj = 5;
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    stroke(255);
    noFill();
    //Ship center is x: 0, y: 0
    //Top to Bottom Left
    line(0, -this.r, -this.r + widthAdj, this.r);
    //Bottom Right to Top
    line(this.r - widthAdj, this.r, 0, -this.r);
    //Bottom left to Center
    line(-this.r + widthAdj, this.r, 0, 8);
    //Bottom right to Center
    line(this.r - widthAdj, this.r, 0, 8);
    pop();
  };

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    this.vel.add(force);
    this.vel.mult(0.80);
  };

  this.turn = function(angle) {
    this.heading = this.heading + angle;
  };
  this.move = function() {
    this.pos.add(this.vel);
  };
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = width - width;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.y > height) {
      this.pos.y = height - height;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  };
}
