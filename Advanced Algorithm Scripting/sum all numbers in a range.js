function sumAll(arr) {
    
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;
    
  //loop through the number from the smallest to the largest
  for(var i = min; i <= max; i++){
    //add the numbers
    sum += i;
  }
  // return the total of the addition
  return sum;
}

sumAll([1, 4]);