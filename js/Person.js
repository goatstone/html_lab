/* Flame.js
 Create a visual  of a flame with SVG
 * */
function Person(e) {
    this.element = e;
    this.radiusTo = 5;
}
Person.prototype.engine = function () {
    var self = this;
    this.element.stop().animate(
        {transform: 'r' + this.radiusTo + ' 410 200'},
        1000,
        function () {
            self.radiusTo = self.radiusTo > 20 ? 5 : 50;
            self.engine();
        }
    );
}

window.onload = function () {

    var sp = Snap.select('.person g');
    sp.transform('s0.9t-0,-40');
    var sp = Snap.select('.person g path:nth-child(3)');
    var p = new Person(sp);
    p.engine();

};