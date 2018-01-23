alert(hello);
var daSlider;
var leSlider;
var jeSlider;


function setup(){
    createCanvas(600,400);
    background(0);
    
    daSlider = createSlider(0, 255, 133);
    daSlider.position(20,20);
    
    leSlider = createSlider(0, 255, 133);
    leSlider.position(20,40);
    
    jeSlider = createSlider(0, 255, 133);
    jeSlider.position(20,60);
}

function draw(){
    redValue = daSlider.value();
    greenValue = leSlider.value();
    blueValue = jeSlider.value();
    
    background(redValue,greenValue ,blueValue);
    
    textSize(12);
    textAlign(LEFT,BASELINE);
    
    text("red",150,25,25);
    text("green",150,55);
    text("blue",150,85);
    
    text(redValue, 200, 25);
    text(greenValue, 200,55);
    text(blueValue, 200,85);
    
    textSize(20);
    textAlign(CENTER,CENTER);
    text("rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")", width/2, height/2);
}