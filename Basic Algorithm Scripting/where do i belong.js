
function getIndexToIns(arr, num) {
  // add the num to that arr
  arr.push(num);
  
  // arrange the number in ascending order
  arr.sort(function(a,b){
    return(a-b);
  });
  
  //return the index of the num added to arr
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);