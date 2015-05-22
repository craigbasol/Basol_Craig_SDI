
/*
Craig Basol
5/21/15
Section 01
Conditionals Assignment
*/

// Calculate greens fees for a golf party

 // Ask user's name before anything
var user = prompt('What is your name?');
// Print to console
console.log(user);

// Validate user name
if (user === ''){
 user=prompt('Can you at least enter a fake name?');
}
// Print to console
console.log(user);


// Ask for first golfer's info
var golferOne = [];
var golferOneName = prompt('What is the first golfer\'s name?');
if (golferOneName === '' || !(isNaN(golferOneName))){
golferOneName=prompt('Can you at least enter a fake name?');
}
var golferOneMember = prompt('Is this person a member at the course?');
golferOne.push(golferOneName);
golferOne.push(golferOneMember);
// Print to console
console.log(golferOne);
