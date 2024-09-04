
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let img
let firstRun = true
function draw_one_frame(words, vocal, drum, bass, other, counter) {

if(firstRun){
  img = loadImage('brickwall.png')
  firstRun = false
}


//   background(255)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(10)
//   text(counter,20,20)

  
//   strokeWeight(20)
//   stroke(0)


  

//   var otherMap = map(other,0,100,0,100)
//   var lengthOfLine = 50
//   var lineStart = 100
//   var lineEnd = lineStart+lengthOfLine


// if (counter<1380){ 
  
//   //LOOK AT MUSIC HISTORY FOR FUNCTION
//   for(var i =1; i <= otherMap; i++){
//     var lineStep=i*5
//     line(lineStart,lineStep,lineEnd,lineStep)
//   }

//   var bassMap = map(bass,0,100,0,100)
//   var lineStart2 = lineEnd+lengthOfLine
//   var lineEnd2 = lineStart2+lengthOfLine
//   for(var i =1; i <= bassMap; i++){
//     var lineStep=i*5
//     line(lineStart2,lineStep,lineEnd2,lineStep)
//   }
// }
  
//   fill(0,255,0)
//   strokeWeight(5)
//   stroke(255,0,0)
//   textAlign(LEFT);
//   textSize(vocal);
//   text(words, 50, 600);



// //other and bass

// x=counter
// var bassline = map(bass,0,100,0,500)



// // line(x,bassline+760,x+25,bassline+760)

// //LOOP X BACK TO START

// fill(255)
// beginShape();
// vertex(0, 700);
// bezierVertex(bassline, 500, 100, bassline, 400, 700);
// endShape();

image(img,0,0)

}
