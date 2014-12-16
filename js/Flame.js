/* Flame.js
 * */
function Flame(e, opacityTo, radiusTo, x, y, speed) {
    this.element = e;
    this.opacityTo = opacityTo ? opacityTo : 0.5;
    this.radiusTo = 5;
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.speed = speed ? speed : 2000;
}
Flame.prototype.engine = function () {
    var self = this;
    this.element.stop().animate(
        { transform: 's1.9t' + this.x + ',' + this.y + 'r' + this.radiusTo, opacity: this.opacityTo},
        this.speed,
        function () {
            var randNum = Math.max(0.3, Math.random());
            self.opacityTo = randNum;
            self.radiusTo = self.radiusTo > 20 ? 5 : 30;
            self.engine();
        }
    );
}

window.onload = function () {

    var flameContainer = Snap.select('.flame');
    flameContainer.attr({'style': 'display:block'})

    var flame = flameContainer.select('path')
        .attr({'fill': 'yellow'})
        .transform('s2t70,90');

    var flame2 = flame.clone()
        .attr('fill', 'pink')
        //.transform('t0,0');

    var flame3 = flame.clone()
        .attr('fill', 'red')
        //.transform('t0,0');

    var f = new Flame(flame, 0.5, 5, 70, 90, 700);
    f.engine();
    var f2 = new Flame(flame2, 0.4, 5, 80, 85, 700);
    f2.engine();
    var f3 = new Flame(flame3, 0.4, 5, 75, 95, 700);
    f3.engine();
};