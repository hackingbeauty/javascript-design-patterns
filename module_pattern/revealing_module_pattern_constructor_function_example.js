MYAPP = MYAPP || {};

MYAPP.moduleName.ObjectName = (function(){

	var varX = "x", // dependencies
		varY = "y",
		Constr;

	// optionally one-time init procedures here...
	
	Constr = function(o) {  // public API -- constructor
		this.elements = this.toArray(o);
	};

	Constr.prototype = { // public API -- prototype
		constructor: MYAPP.moduleName.ObjectName,
		version: "2.0",
		someMethod: function(obj){
			// method code here
		}
	}

	return Constr; // return the constructor

}());

var myObj = new MYAPP.moduleName.ObjectName(someObj);