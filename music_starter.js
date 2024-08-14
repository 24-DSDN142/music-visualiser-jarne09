
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  // ellipse (200,200,200,200)
  // ellipse (500,200,200,200)
  
  // let mouthSize = map(vocal,0,100,60,350)
  // rect (350,500,200,mouthSize)

  // let eyeSize = map (bass,0,100,50,100)

  // fill(255)
  // ellipse (200,200,200,200)
  // fill(0)
  // ellipse (200,200,eyeSize)

  // fill(255)
  // ellipse (500,200,200,200)
  // fill(0)
  // ellipse (500,200,eyeSize)

  // fill(255)
  // let mouthSize = map (vocal,0,100,50,400)
  // ellipse (350,500,mouthSize,mouthSize/2)




  // let bar_spacing = height / 10;
  // let bar_height = width / 12;
  // let bar_pos_x = width / 2;


  // // vocal bar is red
  // fill(200, 0, 0);
  // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  // fill(0);
  // text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

  // // drum bar is green
  // fill(0, 200, 0);
  // rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  // fill(0);
  // text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

  // // bass bar is blue
  // fill(50, 50, 240);
  // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  // fill(0);
  // text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

  // // other bar is white
  // fill(200, 200, 200);
  // rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  // fill(0);
  // text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  // fill(255, 255, 0);

  // // display "words"
  // textAlign(CENTER);
  // textSize(vocal);
  // text(words, width/2, height/3);

  // textSize(10)
  // text(counter,20,20)


  
  strokeWeight(20)
  stroke(0)


  var otherMap = map(other,0,100,5,70)
  var lengthOfLine = 100
  var lineStart = 100
  var lineEnd = lineStart+lengthOfLine

  // if(counter<200 && >300){
  //   stroke(150)
  // }


  for(var i =1; i <= otherMap; i++){
    var lineStep=i*5
    line(lineStart,lineStep,lineEnd,lineStep)
  }

  var drumMap = map(drum,0,100,5,70)
  var lineStart2 = lineEnd+lengthOfLine
  var lineEnd2 = lineStart2+lengthOfLine
  for(var i =1; i <= drumMap; i++){
    var lineStep=i*5
    line(lineStart2,lineStep,lineEnd2,lineStep)
  }

  
}