function A() {
    this.id = 'A';
}
function B() {
    A.call(this);
}
B.prototype = Object.create(A.prototype);

var b = new B();

console.log(b.id);

var a = 'xx'

var c = /abc/.exec()

