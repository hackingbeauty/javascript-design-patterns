// Classical Inheritance Pattern 4 - Share the Prototype

function Parent(name) { // the parent constructor
	this.name = name || 'Adam';
}

Parent.prototype.say = function() { // adding functionality to the prototype
	return this.name;
};

function Child(name) { // empty child constructor
}

function inherit(C, P) {
	C.prototype = P.prototype; // notice the difference between this and classical pattern #1
}

inherit(Child, Parent); // inheritance magic happens here