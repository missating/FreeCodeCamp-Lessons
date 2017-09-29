// thank you Stephen Mayeux for this solution, was stuck for days


var denominations = [
  {name:"ONE HUNDRED", value:100.00},
   {name:"TWENTY", value:20.00},
   {name:"TEN", value:10.00},
  {name:"FIVE", value:5.00},
   {name:"ONE", value:1.00},
  {name:"QUARTER", value:0.25},
  {name:"DIME", value:0.10},
    {name:"NICKEL", value:0.05},
  {name:"PENNY", value:0.01},
  ];

function checkCashRegister(price, cash, cid) {
  
var change = cash - price;
  
var totalCid = cid.reduce(function(accumulator, nextValue){
  return accumulator + nextValue[1];
  }, 0.0);
  
  if(totalCid < change){
    return "Insufficient Funds";
  } else if(totalCid === change){
    return "Closed";
  }
  
  cid = cid.reverse();
  
  var results = denominations.reduce(function(accumulator, nextValue, index){
    if(change >= nextValue.value){
      var currentValue = 0.0;
      while (change >= nextValue.value && cid[index][1] >= nextValue.value){
        currentValue += nextValue.value;
        change -= nextValue.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -=  nextValue.value;
             
             }
      
      accumulator.push([nextValue.name, currentValue]);
      return accumulator;
    } else {
       return accumulator;
    }
  }, []);

  return results.length > 0 && change === 0 ? results : "Insufficient Funds";
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
