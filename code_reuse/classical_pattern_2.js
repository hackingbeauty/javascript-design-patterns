// Classical Inheritance Pattern #2 - Rent-a-Constructor
// Drawbacks
// - Child() cannot inherit methods from Parent prototype!

function Parent(name) {
	this.name = name || 'Adam';
}

Parent.prototype.say = function () {
	return this.name;
};

function Child(name) {
	Parent.apply(this, arguments);
}

var kid = new Child("Patrick");
kid.name; // "Patrick"
kid.say(); // "Patrick"
typeof kid.say; // "undefined" - this sucks, because child did not inherit say() method from Parent

