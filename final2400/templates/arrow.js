var canvas
var sz = 30;
var szz= 30;
var szzz= 30;
var szzzz = 30;
var szzzzz = 30;
var szzzzzz = 30;
var szzzzzzz = 30;
var szzzzzzzz = 30;
var szzzzzzzzz = 30;
function setup() {
 canvas  = createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
    
}

function draw() {
    
 ellipse(560, 470, szz, szz);
 stroke(0, 2, 0);
 strokeWeight(10);


 ellipse(650, 450, szzz, szzz);
 stroke(0, 2, 0);
 strokeWeight(10);

 ellipse(650, 350, szzzz, szzzz);
 stroke(0, 2, 0);
 strokeWeight(10);

 stroke(0, 2, 0);
 strokeWeight(10);
 ellipse(650, 250, sz, sz);
 
ellipse(560, 350, szzzzz, szzzzz);
 stroke(0, 2, 0);
 strokeWeight(10);

 ellipse(460, 350, szzzzzz, szzzzzz);
 stroke(0, 2, 0);
 strokeWeight(10);
  
  ellipse(560, 220, szzzzzzz, szzzzzzz);
 stroke(0, 2, 0);
 strokeWeight(10);
  
   ellipse(370, 350, szzzzzzzz, szzzzzzzz);
 stroke(0, 2, 0);
 strokeWeight(10);

  ellipse(740, 350, szzzzzzzzz, szzzzzzzzz);
 stroke(0, 2, 0);
 strokeWeight(10);
  
  sz += 1;
  

  if(sz > 70){
  	sz = 30;
  }
  
 szz += 1;
 if(szz > 70){
  	szz = 30;
  }
 szzz += 1;
 if(szzz > 70){
  	szzz = 30;
  }
 szzzz += 1;
 if(szzzz > 70){
  	szzzz = 30;
  }
 
  szzzzz += 1;
  if(szzzzz > 70){
    szzzzz = 30;
  }
  szzzzzz += 1;
  if(szzzzzz > 70){
    szzzzzz = 30;
  }
  
  szzzzzzz += 1;
  if(szzzzzzz > 70){
    szzzzzzz = 30;
  }
szzzzzzzz += 1;
  if(szzzzzzzz > 70){
    szzzzzzzz = 30;
  }
  szzzzzzzzz += 1;
  if(szzzzzzzzz > 70){
    szzzzzzzzz = 30;
  }
  
}