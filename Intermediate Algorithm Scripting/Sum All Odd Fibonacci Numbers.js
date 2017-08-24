function sumFibs(num) {
  //array to hold all fib numbers until the specified num
  var fibArr = [1];
    
  //loop to create the array
  for (var i = 1; i <=num;) {
      fibArr.push(i);
      i = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
  }

  // return the sum of odd numbers from the array
  var oddNum = fibArr.reduce(function(a, b) {
      if (b % 2 !== 0) return a + b;
      else return a;
    });

  return oddNum;
}


sumFibs(4);
