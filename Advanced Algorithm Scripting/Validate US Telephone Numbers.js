/*^ denotes the beginning of the string (1?\s?)? checks for 1 and a space at the beginning.
\d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").
Lastly we use regex.test(str) to test if the string adheres to the regular expression and return true or false.*/



function telephoneCheck(str) {
  
    //regular expressions
  var regex = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;
 
    //test the string against the regex
  return regex.test(str);
}

telephoneCheck("555-555-5555");