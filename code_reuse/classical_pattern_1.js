// Classical Inheritance Pattern #1 - The Default Pattern
// Drawbacks to this pattern:
// - does not enable you to pass parameters to the child constructor
// - both "own" properties and prototype properties are added...you just want "own"

function Parent(name) { // the parent constructor
	this.name = name || 'Adam';
}

Parent.prototype.say = function() { // adding functionality to the prototype
	return this.name;
};

function Child(name) { // empty child constructor
}

function inherit(C, P) {
	C.prototype = new P();
}

inherit(Child, Parent); // inheritance magic happens here

var kid1 = new Child();
kid1.say(); // "Adam"

var kid2 = new Child();
kid2.name = "Patrick";
kid2.say(); // "Patrick"

