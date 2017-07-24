
function confirmEnding(str, target) {
  // check if the substr ends with the target
  if(str.substr(-target.length) === target) {
    return true;
  } else {
     return false;
  }
 
}

confirmEnding("Bastian", "n");