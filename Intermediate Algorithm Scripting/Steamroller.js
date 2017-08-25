function steamrollArray(arr) {
  //var to hold the flatened array
  var flattenedArray = [];
  
  //loop though the array to check for arrays
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //store nested arrays from the function
      var nestedArray = steamrollArray(arr[i]);
      flattenedArray  = flattenedArray.concat(nestedArray);
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);