let balls = []; // Array to store the ball objects

// Ball class to store the properties and behaviors of each ball
class Ball {
  constructor() {
    this.x = random(width); // Ball's x position
    this.y = random(height); // Ball's y position
    this.diameter = random(10, 30); // Ball's diameter
    this.xSpeed = random(-2, 2); // Ball's horizontal speed
    this.ySpeed = random(-2, 2); // Ball's vertical speed
  }

  // Method to update the ball's position and bounce it off the walls
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce off the walls
    if (this.x <= 0 || this.x >= width) {
      this.xSpeed *= -1;
    }
    if (this.y <= 0 || this.y >= height) {
      this.ySpeed *= -1;
    }
  }

  // Method to display the ball on the canvas
  show() {
    fill(255); // White color for the ball (blank)
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function setup() {
  createCanvas(600, 600);
  frameRate(60);
  
  // Create 50 balls and add them to the balls array
  for (let i = 0; i < 50; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(0); // Set the background to black

  // Loop through all balls and update and display them
  for (let i = 0; i < balls.length; i++) {
    balls[i].update(); // Update ball position
    balls[i].show();   // Display ball
  }
}


