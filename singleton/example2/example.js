// Singleton instance in a closure
// Benefit: "instance" is private so it cannot be overwritten
// Drawback: "instance" property of Universe constructor will lose any
// other property added to prototype *after* object is constructed

function Universe() {

	// the cached instance
	var instance = this;

	// proceed as normal
	this.start_time = 0;
	this.bang = "Big";

	// rewrite the constructor
	Universe = function () {
		return instance;
	};

}

// testing
var uni = new Universe();
var uni2 = new Universe();

console.log(uni === uni2);