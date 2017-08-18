 
function sumPrimes(num) {
  
    //for prime numbers less than or equal to 1
	if(num <= 1){
		return undefined;
	}

//empty array to hold prime numbers from the loop
var arr = [];

for(var i = 2; i <= num; i++){
	arr.push(i);
}
//console.log(arr);

    //filer through the empty array and return only primes
return arr.filter(function(element, index, array){
	for(var j = 2; j <= Math.sqrt(element); j++) {
		if(element % j < 1) {
			return false;
		}
	}

	return true;

    //add the primes together
}).reduce(function(a, b){
	return a + b;
});

}

sumPrimes(10);