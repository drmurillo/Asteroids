function Asteroid() {
  this.pos = createVector(random(width), random(height));
  this.radius = 20;
  this.vel = createVector(random(-1, 1), random(-1, 1));

  this.show = function() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    beginShape();
    //vertex(this.pos.x, this.pos.y);
    vertex(this.pos.x + 10, this.pos.y - 10);
    vertex(this.pos.x + 20, this.pos.y - 15);
    endShape();
    ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    pop();
  };

  this.shapeChanger = function() {
    // mutate verex x and y position within a given radius.
    var mutateX = random(5, 20);
    var mutateY = random(5, 20);
    return mutateX;
    return mutateY;
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
