
function destroyer(arr) {
  // convert the argument to an array
  var args = Array.prototype.slice.call(arguments);
  
  //loop through the array length
  for(var i = 0; i < arr.length; i++){
    //loop through the args length
    for(var j = 0; j < args.length; j++){
      // check if arr is the same with args and then delete
      if(arr[i] === args[j]) {
        delete arr[i];
      } 
    }
  }
  // remove all null values
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);