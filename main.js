function setup() {
    video = createCapture(VIDEO);
    video.position(18, 60);
    video.size(550, 500);
    canvas = createCanvas(550, 425);
    canvas.position(650, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#1185ba");
}

function modelLoaded() {
    console.log('Posenet is Intialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}