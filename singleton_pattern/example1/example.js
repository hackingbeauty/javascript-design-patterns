// Singleton instance in a static property
// Drawback: "instance" is public and can be overwritten

function Universe(){

	// do we have an existing instance?
	if (typeof Universe.instance === "object") {
		return Universe.instance
	}

	// proceed as normal
	this.start_time = 0;
	this.bang = "Big";

	// cache
	Universe.instance = this;

	// implicit return
	// return this - happens automtically because you're using "new" before function
}

var uni = new Universe();
var uni2 = new Universe();

console.log(uni === uni2);
console.log("Universe.instance property is public: ", Universe.instance);