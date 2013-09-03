var Publisher = {  // Generic publisher functionality
	subscribers: {
		any: [] // event type: subscribers
	},
	subscribe: function (fn, type) {
		type = type || 'any';
		if (typeof this.subscribers[type] === 'undefined') {
			this.subscribers[type] = [];
		}
		this.subscribers[type].push(fn);
		// for(var i =0;i<this.subscribers[type].length;i++){
		// 	console.log(this.subscribers[type][i].toString());
		// }
	},
	unsubscribe: function (fn, type) {
		this.visitSubscribers('unsubscribe', fn, type);
	},
	publish: function (publication, type) {
		this.visitSubscribers('publish', publication, type);
	},
	visitSubscribers: function (action, arg, type) {
		var pubtype = type || 'any',
			subscribers = this.subscribers[pubtype],
			i,
			max = subscribers.length;
		for (i = 0; i < max; i += 1){
			if(action === 'publish') {
				subscribers[i](arg);
			} else {
				if(subscribers[i] === arg) {
					subscribers.splice(i, 1);
				}
			}
		}
	},
	// Take an object and turn it into a publisher by simply copying
	// over the generic publisher's methods:
	makePublisher: function (o) {
		var i, publisher = this;
		for (i in publisher) {
			if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
				o[i] = publisher[i];
			}
		}
		o.subscribers = {any: []};
	}
}

module.exports = Publisher;


