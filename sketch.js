var sound1
//按下滑鼠播放音樂
function preload(){
  sound1 = loadSound("K-391 - Solstice.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#8ca4cf");
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var e1w=10
var e2w=52
var rw=80
var i=160
var fc
function draw() {
  //background("#8ca4cf");
  noFill()
  if(sound1.isPlaying())
  {  //音樂有撥放時
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else
  {  //音樂沒有撥放時
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=26;y<=height+26;y=y+i){
  for(var x=26;x<=width+26;x=x+i){
    stroke("#f400a1")
    ellipse(x,y,e1w+fc)
    
    stroke("#ffb6c1")
    strokeWeight(3)
    ellipse(x,y,e2w+fc)
    
    stroke("#c71585")
    strokeWeight(1)
    rect(x,y,rw+fc)

    push()
    stroke("#f7cac9")
    strokeWeight(1)
    translate(x, y);
    rotate(fc+fc)
    triangle(30,0,0,52.2,60,52.2)
    pop()
  }
  }
}

function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}