function convertToRoman(num) {
  var decimal=[ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var result = '';
  
  //loop through the decimal numbers
  for(var i = 0; i < decimal.length; i++){
    //check if the decimal is less than or equal 36 (here it falls on 10)
    while(decimal[i] <= num) {
      
      //set the result to roman figure of 10
      result += roman[i];
      
      //now, 36 - 10 ( then, repeat the process until its 0)
      num -= decimal[i];
    }
  }
 return result;
}

convertToRoman(36);