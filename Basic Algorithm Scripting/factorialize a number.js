
function factorialize(num) {
  // set 0 strictly equal to 1
  if(num === 0) {
    return 1;
  }
  
  var result = num;
  while (num > 1) {
// reduce the number after every multiplication
    num--;
// number multiplied by result 
    result *= num;
  }
  return result;
}

factorialize(5);