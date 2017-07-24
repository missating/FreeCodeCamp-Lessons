function slasher(arr, howMany) {
  // splice the array into howmany
  
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);