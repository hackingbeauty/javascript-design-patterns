// parent constructor
function CarMaker() {}

// a method of the parent
CarMaker.prototype.drive = function(){
	return "Vroom, I have " + this.doors + " doors";
}

// the static factory method
CarMaker.factory = function (type) {
	var constr = type,
		newCar;

	// error if the constructor doesn't exist
	if (typeof CarMaker[constr] !== "function") {
		throw {
			name: "Error",
			message: constr + " doesn't exist"
		}
	}

	// at this point the constructor is known to exist
	// let's have it inherit the parent but only once
	if (typeof CarMaker[constr].prototype.drive !== "function"){
		// JS-based inheritance happening here
		// This is how CarMaker.Compact gets the "drive" method
		CarMaker[constr].prototype = new CarMaker(); 

		// create a new instance
		newCar = new CarMaker[constr]();
		
		// optionally call some methods and then return...
		return newCar;
	}
};

// define car makers
CarMaker.Compact = function (){
	this.doors = 4;
}

CarMaker.Convertible = function (){
	this.doors = 2;
}

CarMaker.SUV = function (){
	this.doors = 24;
}

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
var jeep = CarMaker.factory('Jeep');

console.log(corolla.drive()); // "Vroom, I have 4 doors"
console.log(solstice.drive()); // "Vroom, I have 2 doors"
console.log(cherokee.drive()); // "Vroom, I have 24 doors"
console.log(jeep.drive()); // Error
