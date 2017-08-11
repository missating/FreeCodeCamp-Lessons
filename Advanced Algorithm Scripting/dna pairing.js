
function pairElement(str) {
  
  var dna = str.split("").map(function(x) {
         switch (x) {             
      case "A":
        return ["A","T"]; 
      case "T":
        return ["T","A"];
      case "C":   
         return ["C","G"];
      case "G":
         return ["G","C"];  
    } 

  });
  return dna;
}

pairElement("GCG");