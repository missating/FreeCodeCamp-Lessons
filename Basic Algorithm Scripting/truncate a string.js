
function truncateString(str, num) {
  // check if the number is greater than or equal to 3
  if(str.length > num && num > 3) {
    //then remove 3 from the number and add ...
    return str.slice(0 , num-3) + '...';
    // check if the string is greater than number but less than and equal to 3
  } else if (str.length > num && num <= 3) {
    // then remove the number and add ...
    return str.slice(0, num) + '...';
  } else {
      return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);