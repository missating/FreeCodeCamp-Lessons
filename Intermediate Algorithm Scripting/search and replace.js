
function myReplace(str, before, after) {
  var splits = str.split(' ');
  
  //loop through the array
   for(var i = 0; i < splits.length; i++){
  	if(splits[i] === before){
      //check if the first letter is uppercase
  		if(splits[i][0] === splits[i][0].toUpperCase()) {
          //if, yes covert the after to uppercase 
  			splits[i] = after.charAt(0).toUpperCase() + after.substring(1);

  		} else {
  			splits[i] = after;
  		}
  		
  	}
  }
  
  return splits.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");