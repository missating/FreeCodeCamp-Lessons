function whatIsInAName(collection, source) {
  //collection is an array.
  //array filter will only return a condition that is true
  
  var arr = [];
  
  //filer the collection array for the obj
   arr = collection.filter(function(obj){
    //for every prop in source
    for(var prop in source){
      //if the prop is not equal to the obj prop
      if(source[prop] != obj[prop]){
        //the condition is not met
          return false;
      }
    }
     
     //the condition is met, so this becomes the array
    return true;
    
  });
   
  
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
