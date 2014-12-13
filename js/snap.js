/* snap.js
* */
function Spinner() {
    this.paper = Snap(600, 600);
    this.path = "";
    // Element nums;
    this.nums = this.paper.text(30, 30, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).attr({
        fontSize: "24px",
        textAnchor: "top"
    });
    this.animationDuration = 12000;
    this.top = 100;
    this.left = 200;
    this.radius = 70
    this.spinPoint = 360;   // degree point on circle
    this.draw();
}
Spinner.prototype.draw = function () {
    var steps = 12;
    for (var i = 0; i < steps; i++) {
        this.nums.select("tspan:nth-child(" + (i + 1) + ")").attr({
            x: this.left + this.radius * Math.cos(Snap.rad(i / steps * 360 + this.spinPoint)),
            y: this.top + this.radius * Math.sin(Snap.rad(i / steps * 360 + this.spinPoint)),
            fill:function(){
                var iTest = Math.floor( (this.spinPoint/30)  );
                iTest = 12 - iTest;
                return iTest === i+1?'red' : 'green';
            }.call(this),
            fontSize:function(){
                var iTest = Math.floor( (this.spinPoint/30)  );
                iTest = 12 - iTest;
                return iTest === i+1? 44 : 16;
            }.call(this)
        });
    }
}
Spinner.prototype.roll = function () {
    var self = this;
    this.nums.stop().animate(
        { transform: 't0,0r360'},
        6000,
        function () {
            self.nums.transform('t0,0r0');
            self.roll();
        }
    );
};
Spinner.prototype.spin = function () {
    var self = this;
    Snap.animate(360, 0, function (val) {
        self.spinPoint = val;
        self.draw();
    }, self.animationDuration, function () {
        self.spin();
    });
};

window.onload = function () {
    var s = new Spinner();
    s.spin();
//        s.roll();

    var paper = Snap(500, 300);
    var snapMatrix = new Snap.Matrix()
    snapMatrix.translate(100, 100);
    snapMatrix.rotate(20, 100, 100);
    var text = paper.text(10, 10, "Hello World");
    text.attr({"font-size": 30});
    text.transform(snapMatrix);
    var moon = Snap.select('#moon').attr({fill: 'blue'});
    var circ = moon.select('circle').attr({fill: 'peru'});
    circ.transform(new Snap.Matrix().translate(20, 100));
};