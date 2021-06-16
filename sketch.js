var r = 1;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background("yellow");
  strokeWeight(4);
  fill("red");
  rect(200, 150, 100, 100);

  if (keyDown("space")) {
    // if (frameCount % 80 === 0) {
    getRandomNumber();
    console.log(r);
  }
  fill("black");
  if (r === 1) {
    circle(250, 200, 10, 10);
  }

  if (r === 2) {
    circle(220, 180, 10, 10);
    circle(270, 220, 10, 10);
  }
  if (r === 3) {
    circle(220, 180, 10, 10);
    circle(270, 220, 10, 10);
    circle(250, 200, 10, 10);
  }
  if (r === 4) {
    circle(225, 180, 10, 10);
    circle(270, 180, 10, 10);
    circle(225, 220, 10, 10);
    circle(270, 220, 10, 10);
  }
  if (r === 5) {
    circle(225, 180, 10, 10);
    circle(270, 180, 10, 10);
    circle(225, 220, 10, 10);
    circle(270, 220, 10, 10);
    circle(250, 200, 10, 10);
  }
  if (r === 6) {
    circle(220, 170, 10, 10);
    circle(220, 200, 10, 10);
    circle(220, 230, 10, 10);
    circle(270, 170, 10, 10);
    circle(270, 200, 10, 10);
    circle(270, 230, 10, 10);
  }

  // text(mouseX + " , " + mouseY, 100, 100);
}

function getRandomNumber() {
  r = Math.round(random(1, 6));
}
