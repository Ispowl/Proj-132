statusw = "";
img = "";
function preload(){

}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = detecting objects";
}
function modelLoaded(){
    console.log('Model is loaded!');
    statusw = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
   if(error){
       console.log(error);
   }
   console.log(results)
}