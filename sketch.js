function Bubble(x, y, col, size){
  this.x = x;
  this.y = y;
  this.col = col;
  this.size = size;
  this.speed = 0;

  this.show = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.size, this.size);
    var rand = Math.floor(random(4));
    if (rand == 0) this.x -= this.speed;
    if (rand == 1) this.y -= this.speed;
    if (rand == 2) this.x += this.speed;
    if (rand == 3) this.y += this.speed;
  }
}

var bubbles = [];
var col;

function setup(){
  createCanvas(600,600);
  bubbles.push(new Bubble(random(600), random(600), color(random(255), random(255), random(255), random(255)), random(5, 50)));
}

function draw(){
  background(0);
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].show();
  }
  document.getElementById("bubbles").innerHTML = bubbles.length;
  document.getElementById("speed").innerHTML = bubbles[0].speed;
}

function keyPressed(){
  if (key == ' '){
    col = color(random(255), random(255), random(255), random(255));
    bubbles.push(new Bubble(random(600), random(600), col, random(5, 50)));
    for (var i = 0; i < bubbles.length; i++){
      bubbles[bubbles.length - 1].speed = bubbles[0].speed;
    }
  }
  if (keyCode == RIGHT_ARROW){
    for (var i = 0; i < bubbles.length; i++){
      bubbles[i].speed += 1;
    }
  }
  if (keyCode == LEFT_ARROW){
    for (var i = 0; i < bubbles.length; i++){
      bubbles[i].speed -= 1;
    }
  }
}