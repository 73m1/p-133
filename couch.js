statusofCoco = ""
objects = []


function preload() {
    image1 = loadImage("img1.jpg");
}

function setup() {

    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Object Detecting...";
}


function draw() {
    image(img1.jpg,0,0,640,420);

    if (statusofCoco=true) {
        for (let i = 0; i < objects.length; i++) {
    
        fill("#3239fa");
        stroke("#cf0ec5");
        noFill();
    
        percentage = floor(objects[i].confidence*100)
    
    text(objects[i].label +" "+ percentage +"%",objects[i].x + 10,objects[i].y + 10)
    
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded");
    statusofCoco=true;
    objectDetector.detect(image1,gotResults);
}


function gotResults(error,results) {
    if(error){
        console.error(error);
    }else {
        console.log(results);
        objects = results
    }
}