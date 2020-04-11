var arg=process.argv.slice(2);
  console.log(arg);

function setup() {
  createCanvas(300,300);
}


function draw() {
background(0);
noFill();
strokeWeight(3);
stroke(255,255,0);
rect(50,50,100,100);
save('output.png');
noLoop();
}
