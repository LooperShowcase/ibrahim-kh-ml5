let player;
let playerImg;
let obsImg;
let obs2;
let obstacles = [];
let bg;
let sc;
let wordClassifier;
function preload() {
  playerImg = loadImage("player.png");
  obsImg = loadImage("obstacle.png");
  bg = loadImage("background.jpg");
  obs2 = loadImage("obs2.png");

  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(600, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}
function draw() {
  background(bg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      noLoop();
    }
  }

  player.show();
  player.move();
}
