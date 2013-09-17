// Singleton instance using a closure when used in an immediate function

var Universe;

(function(){

	var instance;

	Universe = function Universe() { // the closure which has access to private outer property 'instance'

		if (instance) {
			return instance;
		}

		instance = this;

		// all the functionality
		this.start_time = 0;
		this.bang = "Big";

	};

}());

// testing
var uni = new Universe();
var uni2 = new Universe();

console.log(uni === uni2);

// adding to the prototype
Universe.prototype.nothing = true;

var uni3 = new Universe();

// adding to the prototype
Universe.prototype.everything = true;

console.log(uni.nothing); // true
console.log(uni.everything); // true
console.log(uni3.nothing); // true
console.log(uni3.everything); // true