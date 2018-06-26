var canvas
var particles = []
function setup() {
canvas  = createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
}

function draw() {
 background('');
 for(var i=0; i<particles.length; i++){
particles[i].show();
	particles[i].move();
 }
}

function mouseDragged(){
	particles.push(new Particle(mouseX, mouseY));
	
}

function Particle(x, y){
	this.x = x;
	this.y = y;
	this.col = color(random(255), random(255), random(255));
	this.speedX = random(-3,3);
	this.speedY = random(-3,3);


this.show = function(){
	fill(this.col);
	ellipse(this.x, this.y, 10, 10);
}

this.move = function(){
this.x += this.speedX;
this.x += this.speedY;
}
}












