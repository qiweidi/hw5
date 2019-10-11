var circles = 9;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 360; i = i + 10 ) {
    circle(200, 200, 360-i);
  }
}

