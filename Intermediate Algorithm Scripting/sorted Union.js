
function uniteUnique(arr) {
  
  //turn the arguments into an array
 var args = Array.from(arguments);

  //merge the array
var flattened = args.reduce(function(a, b) {
  return a.concat(b);
}, []);

var dup = [];

  //check if the value is in the dup array, if not push the value in.
flattened.forEach(function(value){

if(!dup.includes(value)) {
  
	dup.push(value);
}

});

return dup;

}

uniteUnique([[1, 3, 2], [5, 2, 1, 4], [2, 1]]);