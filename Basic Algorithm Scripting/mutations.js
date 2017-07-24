
function mutation(arr) {
  
  // make the second array lowercase
  var second = arr[1].toLowerCase();
  //make the first array lowercase
  var first = arr[0].toLowerCase();
  // loop through the second array to check if its letters is in the first
  for(var i = 0; i < second.length; i++){
    if(first.indexOf(second[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);