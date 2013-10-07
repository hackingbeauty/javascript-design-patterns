var agg = (function () { // encapsulation with IIFE

	var index = 0,
		data = [1,2,3,4,5],
		length = data.length;

	return { // module pattern
		next: function(){
			var element;
			if(!this.hasNext()){
				return null;
			}
			element = data[index];
			index = index + 2;
			return element;
		},
		hasNext: function(){
			return index < length;
		}
	}

}());

while(agg.hasNext()){
	console.log(agg.next());
}