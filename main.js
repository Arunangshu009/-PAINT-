x=0;
y=0;
screen_width=0;
screen_height=0;
draw_apple="";
apple="";
speak_data="";
to_number=0;

function preload(){
    apple=loadImage("images.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as:"+content;
    if(content=="apple"){
    x = Math.floor(Math.random() * 900)+ content;
    y= Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing apple ";
    draw_apple="set";
}
    if(content=="apple")
    {
    x=Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById( "status").innerHTML = "Started drawing apple "; 
    draw_apple="set";
}
}

function setup(){
    canvas=createCanvas(900, 600);
}

function draw() {
if(draw_apple == "set"){
radius = Math.floor(Math.random() * 100); 
apple(x,y,radius);
document.getElementById("status").innerHTML = "apple is drawn. "
draw_apple = "";}
if(draw_apple == "set")
{
apple(x,y,70,50);
document.getElementById("status").innerHTML = "apple is drawn. " 
draw_apple ="";
}
}
