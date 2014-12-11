
var start = null;

var element;

window.addEventListener('load', function(){
    console.log('load')
    element = document.getElementById("anim");
    window.requestAnimationFrame(step);
})
var lastTS;
function step(timestamp) {
    console.log("ts:", timestamp);
    console.log('diff: ' ,  timestamp - lastTS);
     lastTS = timestamp;
    if (!start){
        start = timestamp;
        console.log("start:", start);
    }

    var progress = timestamp - start;
    element.style.left = Math.min(progress/10, 200) + "px";

    if (progress < 100) {
    console.log(progress);
        window.requestAnimationFrame(step);
    }
}

