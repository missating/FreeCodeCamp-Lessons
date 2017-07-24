<strong> Reverse a string </strong>

You may need to turn the string into an array before you can reverse it.
Your result must be a string.

reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG"

<strong> Solution </strong>

function reverseString(str) {

# turn the string into array before, reversing and joining.

  var split = str.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  
  return join;

}

reverseString("hello");