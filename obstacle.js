class Obstacle {
  constructor() {
    this.size = 30;
    this.x = innerWidth;
    this.y = height - this.size;
    this.velocityX = 0;
    this.option = random(1);
  }
  show() {
    if (this.option > 0.5) {
      image(obsImg, this.x, this.y, this.size, this.size);
    } else {
      image(obs2, this.x, this.y, this.size, this.size);
    }
  }

  move() {
    this.x -= 4;
  }
}
