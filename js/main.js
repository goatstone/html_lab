/*  

 - reverse string
 - test for palindrone
 - create objects
 - make a set
 - preserve scope in a for loop
 - closure

*/
/(.*)/
// test for palindrone

var w = "racecar";
// var i = 0; 
isPal(w);

function isPal(str){
	var len = str.length;
	var j, i ;
	for (i=0, j = len-1; i < len; i++ , j--){
		console.log(str.charAt(i), str.charAt(j));
		if(str.charAt(i) !== str.charAt(j)) return false;
	}
	return true;
}

// make a set
// var s = new Set()
// s.add, s.get

function Set(){
	var set = {};

	this.addSet = function(el){
		set[el] = null;
	};
	this.getSet = function(){
		return  Object.keys( set );
	}
}
Set.prototype.add = function(el){
	this.addSet(el);
};
Set.prototype.get = function(){
	return this.getSet();
};

var s = new Set();

// clousre

var a = '1';

var b = function(){
	return a;
}
console.log(b())

var c = (function(a){
	var d = 'i am enclosed' + a  ;
	return function(e){
		return e + d;
	}
})(99);

var iStore = [];
	var body = document.getElementsByTagName('body')[0]

for(var i=0; i<5; i++){

	iStore.push(i);
	var b = document.createElement('button');
	b.innerText = i;
	body.appendChild(b);

	(function(i){
		b.addEventListener('click', function(e){		
			console.log(i);
		});	

	})(i);


console.log(body)
}

console.log(iStore);
////
function a(){
	return 'a';
}
a()

//sum(2)(3);

var prevNum  = 0;

function sum(n){
	console.log(n);
	var total = 0;

	total = prevNum + n;

	prevNum = n;
	return total;
}

function A(){
	this.id= 'A';
	this.prop= 'prop';
}
A.prototype.a = function(){
	console.log("this	", this);
	return true;
}

function B(){
	this.idea = 'B';
}
B.prototype = new A();
B.prototype = Object.create(A.prototype);

var b = new B();

console.log(b);
var x = b.a();
console.log(x);


var a = Array.prototype.slice.call("abc").reverse().join("") ;

var str = "abc";
var newStr = "";
var iter = str.length;

// while(iter--){
// 	console.log("iter", iter);
// 	newStr += str.charAt(iter);
// }

for(var i=str.length-1; i>=0; i-- ){
	// console.log("iter", i);
	newStr += str.charAt(i);
}
// console.log( "newStr", newStr);
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  // this.x += x;
  // this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

rect instanceof Rectangle; // true
rect instanceof Shape; // true

rect.move(1, 1); // Outputs, 'Shape moved.'




