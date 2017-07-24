function largestOfFour(arr) {
  // set a variable to hold the largest numbers
  var largestArr = [0, 0, 0, 0];
  
  // loop through the first array
  for(var i = 0; i < arr.length; i++){
    // loop through the second array
    for(var j = 0; j < arr.length; j++){
      // check if both arrays are larger than largestArr
      if(arr[i][j] > largestArr[i]) {
        //place it inside the large array if its larger
        largestArr[i] = arr[i][j];
      }
    }
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);