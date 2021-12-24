video = "";
myStatus= "";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function draw() {
    image(video,0,0,480,380);
}

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = 'status: detecting objects';
}

function modelLoaded() {
    console.log('model loaded');
    myStatus = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}