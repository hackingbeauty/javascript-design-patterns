// Classical Inheritance Pattern #3 - Rent and Set Prototype
// With this pattern, the parent's methods are successfully inherited
// The drawback is that the parent constructor is called twice

function Parent(name) { // patern constructor
	this.name = name || 'Adam';
}

Parent.prototype.say = function(){ // added functionality to prototype
	return this.name;
}

function Child(name) { // child constructor
	Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("Patrick");
kid.name; // "Patrick"
kid.say(); // "Patrick"
delete kid.name;
kid.say(); // "Adam"


