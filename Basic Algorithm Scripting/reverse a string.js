
function reverseString(str) {

//turn the string into an array, reverse and join
  var split = str.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  
  return join;

}

reverseString("hello");