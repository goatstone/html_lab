
var sz = 25;

var times=[];
for (var i=0; i<sz; ++i) {
    times[i]=0.0;
}

var lastIdx = 0;
function callbackFired(time) {
    times[lastIdx] = time;
    lastIdx = (lastIdx+1)%sz;

    var sum=0.0;
    for (var i=0; i<sz; ++i) {
        sum += times[i];
    }
    var avg=sum/sz;
    document.getElementById("avgdelay").textContent = avg;
    document.getElementById("fps").textContent = 1000.0/avg;
}
