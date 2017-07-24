function chunkArrayInGroups(arr, size) {
  // set a variable for the split array
  var arr2;
  // set a variable to contain the two-dimensional array
  var arr3 = [];
  // a loop to check the length of the array, and increment by size
  for(var i = 0; i < arr.length; i+=size){
    // slice the arr into size
    arr2 = arr.slice(i, i+size);
    // push the slice array into the new array
    arr3.push(arr2);
  }
  return arr3;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);