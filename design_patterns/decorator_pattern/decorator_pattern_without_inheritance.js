function Sale(price) {
	this.price = (price > 0) || 100;
	this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedTax = {
	getPrice: function(price) {
		return price + price * 5 / 100;
	}
};

Sale.decorators.quebec = {
	getPrice: function(price) {
		return price + price * 7.5 / 100;
	}
};

Sale.decorators.money = {
	getPrice: function(price) {
		return "$" + price.toFixed(2);
	}
};
