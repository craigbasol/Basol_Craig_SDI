
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
 user = prompt('Can you at least enter a fake name?');
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
