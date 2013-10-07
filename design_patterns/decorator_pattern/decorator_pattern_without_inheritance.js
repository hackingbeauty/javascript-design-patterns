function Sale(price) {
	this.price = price || 100;
	this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedtax = {
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

Sale.prototype.decorate = function(decorator) {
	this.decorators_list.push(decorator);
}

Sale.prototype.getPrice = function(){
	var price = this.price,
		name;

	for(var i = 0; i< this.decorators_list.length; i+=1){
		name = this.decorators_list[i];
		price = Sale.decorators[name].getPrice(price);
		console.log("current price is: ", price);
	}
	return price;
}

var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');
console.log('the price is: ', sale.getPrice());
