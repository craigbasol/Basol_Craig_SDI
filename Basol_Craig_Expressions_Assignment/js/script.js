
/*
Craig Basol
5/14/15
Section 01
Expressions Assignment
*/

// Calculator to determine cost for filling a tank of gas and whether to drive further for a cheaper price

// Ask for the user's name
var name = prompt('Before we begin, could you tell me your name?');
// log to console
console.log(name);

// Introduce calculator to user
alert('Hello '+name+', let\'s see how much it will be to fill up your gas tank and whether you should drive further for a better price.');

// Prompt for tank size
var tankSize = prompt('How many gallons can your gas tank hold?');
// log to console
console.log(tankSize);

// Prompt for amount of gas left
var tankAmnt = prompt('As a decimal, how much gas do you have left? [e.g. About half a tank = 0.50');
// log to console
console.log(tankAmnt);

// Approximate gas needed to fill tank
tankAmnt --;
// log to console
console.log(tankAmnt);
var gasFill = tankSize * Math.abs(tankAmnt);
// log to console
console.log(gasFill);

// Prompt for gas price at first station
var stationOne = prompt('How much per gallon is gas at the first station?');
// log to console
console.log(stationOne);

// Calculate cost for filling up at first station
var costOne = stationOne * gasFill;
// log to console
console.log(costOne);

// Prompt for distance to second station
var distance = prompt('How far, in miles, is it to the second gas station?');
// log to console
console.log(distance);

// Prompt for gas mileage
var mileage = prompt('How many miles to the gallon does your car average?');
// log to console
console.log(mileage);

// Calculate extra gas needed to reach second station
var gasBurn = distance / mileage;
// log to console
console.log(gasBurn);

// Calculate new fill amount needed and store difference
var gasDiff = gasBurn;
gasBurn += gasFill;
// log to console
console.log(gasBurn);

// Prompt for gas price at second station
var stationTwo = prompt('How much per gallon is gas at the second station?');
// log to console
console.log(stationTwo);

// Calculate cost for filling up at second station
var costTwo = stationTwo * gasBurn;
// log to console
console.log(costTwo);

// Return normal monetary values for costs
costOne = costOne.toFixed(2);
costTwo = costTwo.toFixed(2);
// log to console
console.log(costOne);
console.log(costTwo);

// Calculate difference in price
var difference = Math.abs(costOne - costTwo);
// log to console
console.log(difference);

// Deliver final results to user
alert('Thanks '+name+'! Let\'s take a look at what we\'ve come up with. Filling up at the first station will cost you $'+costOne+'. If you drive to the second gas station, you will burn an additional '+gasDiff+' gallon(s) of fuel. The cost to fill up at the second station will be $'+costTwo+'. That\'s a difference of $'+difference+'!')