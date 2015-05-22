
/*
Craig Basol
5/21/15
Section 01
Conditionals Assignment
*/

// Calculate greens fees for a golf party of four

 // Ask user's name before anything
var user = prompt('What is your name?');
// Print to console
console.log(user);

// Validate user name
if (user === '' || !(isNaN(user))) {
 user = prompt('Can you at least enter a fake name?');
} else {
 alert('Okay '+user+', so let\'s find out how much it will be for your party of four on the golf course today!')
}
// Print to console
console.log(user);


// Ask for first golfer's info
var golferOne = [];
var golferOneName = prompt('What is the first golfer\'s name?');
if (golferOneName === '' || !(isNaN(golferOneName))){
golferOneName = prompt('Can you at least enter a fake name?');
}
var oneMember = prompt('Is this person a member at the course?');
var golferOneMember = oneMember.toLocaleLowerCase();
// Print to console
console.log(golferOneMember);
var members = 0;
var guests = 0;
(golferOneMember === 'yes') ? members++ : guests++ ;
golferOne.push(golferOneName);
golferOne.push(golferOneMember);
// Print to console
console.log(golferOne);
console.log(members);
console.log(guests);

// Ask for second golfer's info
var golferTwo = [];
var golferTwoName = prompt('What is the second golfer\'s name?');
if (golferTwoName === '' || !(isNaN(golferTwoName))){
 golferTwoName = prompt('Can you at least enter a fake name?');
}
var twoMember = prompt('Is this person a member at the course?');
var golferTwoMember = twoMember.toLocaleLowerCase();
// Print to console
console.log(golferTwoMember);
(golferTwoMember === 'yes') ? members++ : guests++ ;
golferTwo.push(golferTwoName);
golferTwo.push(golferTwoMember);
// Print to console
console.log(golferTwo);
console.log(members);
console.log(guests);

// Ask for first golfer's info
var golferThree = [];
var golferThreeName = prompt('What is the third golfer\'s name?');
if (golferThreeName === '' || !(isNaN(golferThreeName))){
 golferThreeName = prompt('Can you at least enter a fake name?');
}
var threeMember = prompt('Is this person a member at the course?');
var golferThreeMember = threeMember.toLocaleLowerCase();
// Print to console
console.log(golferThreeMember);
(golferThreeMember === 'yes') ? members++ : guests++ ;
golferThree.push(golferThreeName);
golferThree.push(golferThreeMember);
// Print to console
console.log(golferThree);
console.log(members);
console.log(guests);

// Ask for fourth golfer's info
var golferFour = [];
var golferFourName = prompt('What is the fourth golfer\'s name?');
if (golferFourName === '' || !(isNaN(golferFourName))){
 golferFourName = prompt('Can you at least enter a fake name?');
}
var fourMember = prompt('Is this person a member at the course?');
var golferFourMember = fourMember.toLocaleLowerCase();
// Print to console
console.log(golferFourMember);
(golferFourMember === 'yes') ? members++ : guests++ ;
golferFour.push(golferFourName);
golferFour.push(golferFourMember);
// Print to console
console.log(golferFour);
console.log(members);
console.log(guests);

/*
// Create name arrays
var memberNames = [];
var guestNames = [];
(golferOneMember === 'yes') ? memberNames.push(golferOneName); : guestNames.push(golferOneName)
(golferTwoMember === 'yes') ? memberNames.push(golferTwoName); : guestNames.push(golferTwoName)
(golferThreeMember === 'yes') ? memberNames.push(golferThreeName); : guestNames.push(golferThreeName)
(golferFourMember === 'yes') ? memberNames.push(golferFourName); : guestNames.push(golferFourName)
// Print to console
console.log(memberNames);
console.log(guestNames);
*/

// Calculate fees
var memberCost = 20;
var guestCost = 30;
var cost = members * memberCost;
cost += guests * guestCost;
// Print to console
console.log(cost);

// Collect and report
if (members === 0){
alert('Since there are no members in your group today, your total will be $'+cost+'. Is there anything else we can do for you today '+user+'?');
 console.log('Since there are no members in your group today, your total will be $'+cost+'. Is there anything else we can do for you today '+user+'?');
} else if (members < 4) {
alert('Please verify you have '+guests+' guests with you. If that is correct, your total today comes to $'+cost+'. Is there anything else we can do for you today '+user+'?');
 console.log('Please verify you have '+guests+' guests with you. If that is correct, your total today comes to $'+cost+'. Is there anything else we can do for you today '+user+'?');
} else {
alert('Please verify that all '+members+' players are members. If that is correct, your total today comes to $'+cost+'. Is there anything else we can do for you today '+user+'?');
 console.log('Please verify that all '+members+' players are members. If that is correct, your total today comes to $'+cost+'. Is there anything else we can do for you today '+user+'?')
}