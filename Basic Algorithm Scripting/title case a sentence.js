function titleCase(str) {
  //convert all the string to lower case and split
  var word = str.toLowerCase().split(' ');
  // loop through each word and make the first char uppercase
  for(var i = 0; i < word.length; i++){
    word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
  }
  
  // return the word and join them back
  return word.join(' ');
}

titleCase("I'm a little tea pot");