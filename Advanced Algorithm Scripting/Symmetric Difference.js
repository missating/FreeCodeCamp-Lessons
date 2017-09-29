function sym(args) {
  //convert the argument into an array
  var argsArr = Array.prototype.slice.call(arguments);
  
  //function to check and return the sym diff
  function symDiff(arr1, arr2){
    //array t hold unique values
    var uniqueArr = [];
    
    //iterate through the first arr and check for unique values
    for(var i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) < 0 && uniqueArr.indexOf(arr1[i]) < 0 ){
        uniqueArr.push(arr1[i]);
      }
    }
    
    //iterate through the second arr and check for unique values
    for(var j = 0; j < arr2.length; j++){
      if(arr1.indexOf(arr2[j]) < 0 && uniqueArr.indexOf(arr2[j]) < 0 ){
        uniqueArr.push(arr2[j]);
      }
    }
    
    return uniqueArr;
  }
  return argsArr.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);