MYAPP = MYAPP || {}; // namespace

MYAPP.moduleName.array = (function (){ // private scope provided by immediate function
	
	// declare private variables here

	// optionally one-time init procedures here

	// declare private methods heres
	inArray: function (needle, haystack) {
		// method code here...
	},
	isArray: function (a) {
		// method code here...
	}
	
	return { // only methods you declare public are revealed
		isArray: isArray,
		indexOf: indexOf
	};

}());

