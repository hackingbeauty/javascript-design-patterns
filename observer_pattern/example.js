var Publisher = require('./publisher.js');

var Paper = {  // The Publisher
	daily: function() {
		this.publish('big news today');
	},
	monthly: function() {
		this.publish('interesting analysis', 'monthly');
	}
}

Publisher.makePublisher(Paper);  // Make object 'Paper' into a Publisher

var Joe = { // The Subscriber a.k.a. The Observer
	drinkCoffee: function (paper) {
		console.log('Just read ' + paper);
	},
	sundayPreNap: function (monthly) {
		console.log('About to fall asleep reading this ' + monthly);
	}
}

// Object 'Subscriber' is subscribing to 'Paper' 
Paper.subscribe(Joe.drinkCoffee);
Paper.subscribe(Joe.sundayPreNap, 'monthly');

// Fire events
Paper.daily();
Paper.daily();
Paper.monthly();