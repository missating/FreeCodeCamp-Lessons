function findLongestWord(str) {
  //split the string into seperate words
  var splits = str.split(' ');
  // set a variable for the longest word
  var longestWord = 0;
  // a loop to run through each word and check the length
  for(var i = 0; i < splits.length; i++){
    // check if the length of each split word is longer than the longest word
    if(splits[i].length > longestWord) {
      // set longest word equal to the each of the longest split word
      longestWord = splits[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");