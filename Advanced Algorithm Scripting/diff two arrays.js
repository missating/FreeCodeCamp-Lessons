function diffArray(arr1, arr2) {
  var newArr = [];
  
  //check if the values of arr1 is present in arr2, if its not add it to the newArr and vice versa
  for (var i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1){
      	newArr.push(arr1[i]);
    }
  }
  
  for (var j = 0; j < arr2.length; j++) {
    if(arr1.indexOf(arr2[j]) === -1){
     newArr.push(arr2[j]);
    }
  }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);