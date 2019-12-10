var lego;
var face;
var song;


function preload() {
  lego = loadModel("assets/lego.obj", true);
  face = loadImage("assets/Face_04.png");
  song = loadSound("assets/Naked.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noStroke();
  song.play();

}

function draw() {
  background(20);

  camera(mouseX - width / 2, mouseY - height / 2, -300, 2, 0, 0, 0, 1, 0);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  pointLight(207, 255, 249, locX, locY, 50);

  // Blue directional light from the left
  directionalLight(178, 0, 209, 0, 1, 0);
  directionalLight(0, 255, 225, 0, 0, -1);
  directionalLight(random(255), 102, 255, -1, 0, 0);

  ambientLight(59, 44, 1);

  texture(face);
  rotateZ(180);
  rotateY(locY * -0.5);
  rotateX(map(mouseY, 0, height, 0, PI));
  model(lego);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
