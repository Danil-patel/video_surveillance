video = "";
myStatus= "";
objects = [];
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function draw() {
    image(video,0,0,480,380);
    if(myStatus!='') {
        objectDetector.detect(video,gotResult);
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = 'status: object detected';
            document.getElementById("number_of_objects").innerHTML = 'number of objects detected are: ' + objects.length;

            fill("#ff0000");
            stroke("#ff0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + ' ' + percent + '%', objects[i].x+15, objects[i].y+15);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}