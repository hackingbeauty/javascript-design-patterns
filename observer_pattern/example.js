// This object that will become a Publisher
var Paper = {
	daily: function() {
		this.publish('big news today');
	},
	monthly: function() {
		this.publish('interesting analysis', 'monthly');
	}
}

// Make object 'Paper' into a Publisher
Publisher.makePublisher(Paper);

// Object 'SubscriberJoe' is subscribing to 'Paper' 
Paper.subscribe(SubscriberJoe.drinkCoffee);
Paper.subscribe(SubscriberJoe.sundayPreNap, 'monthly');

// Fire events
paper.daily();
paper.daily();
paper.monthly();