function fearNotLetter(str) {
  
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  
  //alphabet in the alphabet
   if(alphabet.includes(str)){
    return undefined;
  }
  
  //loop through to check for missing alphabet
  for(var i = 0; i < alphabet.length; i++){
    if(!str.includes(alphabet[i])){
      return alphabet[i];
    }
  } 
    
}
fearNotLetter("abce");