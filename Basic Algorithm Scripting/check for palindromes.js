function palindrome(str) {
  // convert to lower case and remove all punctuation, case and spacing
  var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
  //split and reverse the string
  var reverseStr = lowRegStr.split("").reverse().join('');
   // check if both reverse and lowreg are the same
  if(reverseStr === lowRegStr) {
    return true;
  } else {
    return false;
  }
  
}



palindrome("eye");