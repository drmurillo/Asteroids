var ship;
var asteroids = [];
var asteroidCount = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < asteroidCount; i++) {
    asteroids.push(new Asteroid());
  }
  ship = new Ship();
}

function draw() {
  background(0);
  ship.show();
  ship.move();
  ship.edges();
  for (i = 0; i < asteroids.length; i++) {
    asteroids[i].show();
    asteroids[i].move();
    asteroids[i].edges();
  }
  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.08);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.08);
  }

  if (keyIsDown(UP_ARROW)) {
    ship.boost();
  }
}

/*function keyPressed() {
  if (keyCode === UP_ARROW) {
    ship.boost();
  }
} */
