
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let img
let firstRun = true

function draw_one_frame(words, vocal, drum, bass, other, counter) {

if(firstRun){
  brickwall = loadImage('Images/brickwall.png')
  pants = loadImage ('Images/142personblue.png')
  shirt = loadImage ('Images/142topblue.png')
  doom = loadImage ('Images/DOOMTAG.png')
  boardside = loadImage ('Images/142boardside.png')
  boardtop = loadImage ('Image/142boardflip.png')
  boardflipped = loadImage ('Image/142upsidedown.png')
  firstRun = false
}

  
  if (counter>1380){ 
  image(brickwall,0,0,877,620)
  }

  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(10)
  text(counter,20,20)



if (counter<1380){ 

  fill(255)
  background(0)
  rect(438.5,360,777,620)
  stroke(0)
  line(161,0,161,900)
  line(272,0,272,900)
  line(383,0,383,900)
  line(494,0,494,900)
  line(605,0,605,900)
  line(716,0,716,900)

  var otherMap = map(other,0,100,0,100)

  for(var i =1; i <= otherMap; i++){
    var lineStep=i*5
    line(161,lineStep,271,lineStep)
  }

  var bassMap = map(bass,0,100,0,100)
  
  for(var i =1; i <= bassMap; i++){
    var lineStep=i*5
    line(383,lineStep,494,lineStep)
  }

  var drumMap = map(drum,0,100,0,100)

  for(var i =1; i <= drumMap; i++){
    var lineStep=i*5
    line(605,lineStep,716,lineStep)
  }

}
  
  
  strokeWeight(5)
  stroke(255)
  textAlign(LEFT);
  textSize(vocal);
  text(words, 50, 80);



x=counter
var bassline = map(bass,0,100,0,400)

var drumrotate = map(drum,0,100,-25,25)

if (counter>1380){ 

stroke(0)
strokeWeight(5)
fill(30,172,56)
beginShape();
vertex(0, 620);
bezierVertex(289, bassline+250, 589, bassline+250, 877, 620);
endShape();

image (pants,309,bassline+100,236.3,197)
image (boardside,309,bassline+230,223.3,53.3)





push()
translate(430,bassline+125)
rotate(drumrotate)
image (shirt,-137.8,-118,275.6,118)
pop()

var doomtag = map(vocal,0,100,0,40)

image (doom,550,-100,310+doomtag,438.5+doomtag)
}

if (counter>6562){
  if(counter<6590){
background(250,0,0)

noFill()

beginShape();
vertex(313, 83);
bezierVertex(390, 163, 450, 172, 537, 70);
endShape();
beginShape();
vertex(313, 83);
bezierVertex(324, 152, 226, 190, 179, 154);
endShape();
beginShape();
vertex(128, 315);
bezierVertex(184, 280, 211, 202, 179, 154);
endShape();
beginShape();
vertex(128, 315);
bezierVertex(206, 320, 245, 383, 199, 473);
endShape();
beginShape();
vertex(369, 531);
bezierVertex(358, 402, 266, 404, 199, 473);
endShape();
beginShape();
vertex(369, 531);
bezierVertex(425, 449, 535, 436, 585, 529);
endShape();
beginShape();
vertex(725, 418);
bezierVertex(644, 380, 565, 423, 585, 529);
endShape();
beginShape();
vertex(725, 418);
bezierVertex(656, 353, 664, 290, 746, 249);
endShape();
beginShape();
vertex(637, 130);
bezierVertex(600, 201, 657, 275, 746, 249);
endShape();
beginShape();
vertex(637, 130);
bezierVertex(564, 208, 455, 174, 537, 70);
endShape();
  }
}



}
