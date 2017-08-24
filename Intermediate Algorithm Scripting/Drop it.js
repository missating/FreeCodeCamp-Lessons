function dropElements(arr, func) {
  var returnTrue = []; 
  var returnFalse = [];
  
  //loop through the array
 	for (i = 0; i < arr.length; i++){
      
//check if it returns false when matched with the function and if its already in the false array
 		if (func(arr[i]) === false && returnFalse.includes(arr[i]) === false){
          //if its not add it to the array
 			returnFalse.push(arr[i]);
 		} else {
         //else if it runs against the function and returns true, add it to the true array
 			returnTrue.push(arr[i]);
 		}
 	}
    return returnTrue;
}


dropElements([1, 2, 3], function(n) {return n < 3; });

//OR

function dropElements(arr, func) {
   //run a loop to check the values in the array against the function until it returns true, then return the filtered array
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});