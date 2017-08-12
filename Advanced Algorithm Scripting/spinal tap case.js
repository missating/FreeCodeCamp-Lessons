function spinalCase(str) {
 
  //replace the camel case with spaces
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  
  //replace under score and space with -
  var newStr = str.replace(/\s+|_+/g, '-').toLowerCase();
 
  
  return newStr;
}

spinalCase('This Is Spinal Tap');