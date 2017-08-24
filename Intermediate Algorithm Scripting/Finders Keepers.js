
function findElement(arr, func) {
  
  //filter the array with the provided function and save it a var
  
var truthTest = arr.filter(func); 

  //return the first element in the var that is true
  return truthTest[0];

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
