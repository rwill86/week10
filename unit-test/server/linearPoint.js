module.exports = {
     addnum: function(a, b, c){
		 let err = [];
		 if(isNaN(a) || a == null || a == undefined || a == ''){
			 err.push('Number 1 is not a number.');
		 }
		 
		 if(isNaN(b) || b == null || b == undefined || b == ''){
			 err.push('Number 2 is not a number.');
		 }
		 
		 if(isNaN(c) || c == null || c == undefined || c == ''){
			 err.push('Number 3 is not a number.');
		 }
		 return {'result':(a * b) + c * 1, 'errors':err};
	 }
};