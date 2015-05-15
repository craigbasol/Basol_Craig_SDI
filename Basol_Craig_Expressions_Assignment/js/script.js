
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
var tankFill = 1 - tankAmnt;
// log to console
console.log(tankFill);
var gasFill = tankSize * tankFill;
// log to console
console.log(gasFill);