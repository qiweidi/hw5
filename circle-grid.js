function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(2);
  for (var x = 20; x <= 385; x = x + 50) {
    for (var y = 20; y <= 385; y = y + 50) {
    ellipse (x, y, 25,25);
    }
  }
}
