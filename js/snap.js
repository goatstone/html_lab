/* snap.js
* */
function Spinner() {
    this.paper = Snap(300, 300).attr({'id':'spinner'});
    var backgroundColor = 'gray';
    this.path = "";
    // this.rect = this.paper.rect(0, 0, '100%', '100%')
    // .attr({'fill':backgroundColor})  ;
    // Element nums;
    this.nums = this.paper.text(30, 30, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).attr({
        fontSize: "24px",
        textAnchor: "top"
    });
    this.animationDuration = 12000;
    this.top = 100;
    this.left = 120;
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

function Flame(e, opacityTo, radiusTo, x, y, speed){
    this.element = e;
    this.opacityTo = opacityTo? opacityTo : 0.5;
    this.radiusTo = 5;
    this.x = x? x:0;        
    this.y = y? y:0;
    this.speed = speed? speed: 2000;
}
Flame.prototype.engine = function (){
    var self =  this;
    this.element.stop().animate(
        { transform: 's1.5t'+this.x+','+this.y+'r'+this.radiusTo, opacity:this.opacityTo},
        this.speed,
        function () {
            var randNum = Math.max( 0.3, Math.random() ); 
            // console.log('...', randNum, self);
            self.opacityTo  = randNum; 
            self.radiusTo = self.radiusTo > 20 ? 5 : 30 ;              
            self.engine();    
        }
    );

}

window.onload = function () {
    // var s = new Spinner();
    // s.spin();
// //        s.roll();

    var paper = Snap(200, 200);
    var snapMatrix = new Snap.Matrix()
    snapMatrix.translate(0, 50);
    snapMatrix.rotate(10, 100, 100);
    // var text = paper.text(10, 10, "Hello World");
    // text.attr({"font-size": 30});
    // text.transform(snapMatrix);

    //var flame = Snap.select('#flame path').attr('fill', 'green');

    var m = new Snap.Matrix();
    m.scale(3);
    var flame = Snap.select('.flame path')
    .attr('fill', 'orange')
    .transform('s0.2t200,200');

    var flame2 = flame.clone()
    .attr('fill', 'pink')
    .transform('t20,20');

    var flame3 = flame.clone()
    .attr('fill', 'blue')
    .transform('t10,10');
//    .scale(2);

    var f =   new Flame(flame, 0.5, 5, 70 , 90, 1000 );
    f.engine();
    var f2 =   new Flame(flame2, 0.4, 5, 100, 20, 700);
    f2.engine();
    var f3 =   new Flame(flame3, 0.4, 5, 90, 20, 500);
    f3.engine();
 
    // var f = flame.select('#flame path');
/*
    var moon = Snap.select('#moon').attr({fill: 'blue'});
    var circ = moon.select('circle').attr({fill: 'peru'});
    circ.transform(new Snap.Matrix().translate(20, 100));
*/

};


                // flame.stop().animate(
                //     {transform:'t5,5r10', opacity:'1.0'},
                //     2000, 
                //     function(){
                //         // console.log('f done...');
                //         animEngine();    
                //     });
                //flame.transform( 't0,0r0');
                //flame.attr( {opacity:'1.0'});
                //console.log(this);
