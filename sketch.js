function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("purple");
  stroke ("blue")
  fill ("red")
  
  if (mouseIsPressed){
    rect (mouseY, mouseX, 1, 1);
  }
}
