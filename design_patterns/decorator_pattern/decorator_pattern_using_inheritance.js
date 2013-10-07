function Sale(price) {
	this.price = price || 100,
	this.yadaBlaha = "boo"
}

Sale.prototype.getPrice = function() {
	return this.price;
};

Sale.prototype.decorate = function(decorator){
	var F = function() {},
		overrides = this.constructor.decorators[decorator], // use 'constructor' keyword to get the instance of the function that was constructed
		i,
		newObj;
	
	F.prototype = this; // 'this' refers to Sale constructor..set the temporary constructor's prototype to the Sale constructor
	newObj = new F(); // invoke the temporary constructor
	newObj.uber = F.prototype; // the object's new uber property that will be return below is now set to the Sale constructor's prototype

	for(i in overrides) { //iterates over every key in each decorator object...the only key in this case is the getPrice() property which is a functionfv                  
		if(overrides.hasOwnProperty(i)){
			newObj[i] = overrides[i];
		}
	}
	// console.log('newObj is: ', newObj);
	return newObj;
}

Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice: function(){
		var price = this.uber.getPrice();
		price +=  price * 5 / 100;
		return price;
	}
};

Sale.decorators.quebec = {
	getPrice: function(){
		var price = this.uber.getPrice();
		price += price * 7.5 / 100;
		return price;
	}
};

Sale.decorators.money = {
	getPrice: function(){
		return "$" + this.uber.getPrice().toFixed(2);
	}
};

Sale.decorators.cdn = {
	getPrice: function(){
		return "CDN$ " + this.uber.getPrice().toFixed(2);
	}
};

var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
console.log('the price is: ', sale.getPrice());