song="";
leftwristy=0;
leftwristx=0;
rightwristx=0;
rightwristy=0;
function preload(){
 song=loadSound("music.mp3");
}
function setup(){

canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO)
video.hide();

poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose', gotposes);
}
function draw(){
 image(video ,0,0,600,500)

}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelloaded(){
    console.log('poseNet');
   
}
function gotposes(results){
    if(results.length> 0){
        console.log(results);
        scoreleftwrist= results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist"+scoreleftwrist);
        leftwristx = results[0].pose.leftwrist.x;
        leftwristy = results[0].pose.leftwrist.y;
        console.log("leftwristx="+leftwristx+"leftwristy"+leftwristy );
        rightwristx = results[0].pose.rightwrist.x;
        rightwristy = results[0].pose.rightwrist.y;
        console.log("rightwristx="+rightwristx+"rightwristy"+rightwristy );
    }

}

function draw(){
    image(video,0,0,600,500)
    fill("#FFOOOO");
    stroke("#FFOOOO");
    circle(leftwristx,leftwristy,20);
    InNumberleftwristy=Number(leftwristy);
    remove_decimal=floor(InNumberleftwristy);
    volume=remove_decimal/500;
    document.getElementById("volume").innerHTML="volume="+volume;
    song.setVolume(volume);
}



