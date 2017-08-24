   
function smallestCommons(arr) {
  
  //sort through array from smallest to greatest
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  
   // Create new array and add all values from greater to smaller
  
  var newArr =[];
  while (min<=max){
    
      newArr.push(min);
      min++;
  }
  
  //find the lcm in the array
  var result = newArr[0];
  
for (var i = 1; i<newArr.length; i++)
    result = findLCM(result, newArr[i]);
  
  return result;
}

function gcd(a, b){
  
  while (a !== b){
    
    if(a > b)
      a = a - b;
    else
      b = b - a;
    
  }

  return a;
}

function findLCM(a, b){
  
  return a * (b / gcd (a,b));
  
}
smallestCommons([1,5]);