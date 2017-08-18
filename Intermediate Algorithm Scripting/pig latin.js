
function translatePigLatin(str) {
  
  //regex to match your string for vowel
  var regex  = /[aeiou]/i;

    //if string is vowel add "way"
   if(str[0].match(regex)){
   		str = str + "way";
   		
   } else {
        //match the str for consonant
   		var cons_index = str.match(regex).index;
     //return the consonant and add "ay"
   		str = str.substring(cons_index) + str.slice(0, cons_index) + "ay";

  }

 return str;

}

translatePigLatin("consonant");