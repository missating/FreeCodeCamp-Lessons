 var chars = [/&/g, /</g, />/g, /\"/g, /\'/g];
  var entity = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  
  for(var i = 0; i < chars.length; i++) {
   str = str.replace(chars[i], entity[i]);
    
   
  }
  
   return str;
  
}