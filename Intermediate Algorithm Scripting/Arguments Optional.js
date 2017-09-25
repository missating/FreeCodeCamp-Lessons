function addTogether() {
  //if only one argument return a function
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        var x = arguments[0];
      //function takes one argument and returns the sum
        return function(y) {
            if (typeof y === 'number') {
                return x + y;
            }
        };
      //if two arguments sum them together
    } else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
        return arguments[0] + arguments[1];
    }
}


addTogether(2,3);