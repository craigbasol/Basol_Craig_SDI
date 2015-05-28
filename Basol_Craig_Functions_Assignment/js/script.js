/*
 Craig Basol
 5/28/15
 Section 01
 Functions Assignment
 */

// Simple cafe register-style calculation... something

alert('\'Ello there, name\'s Pip! Welcome to the cafe!');

var foodOrDrinks = prompt('Would you like to get some food or are you just stopping in for drinks?');
foodOrDrinks.toLowerCase();

while (foodOrDrinks != 'food' && foodOrDrinks != 'drinks'){
    foodOrDrinks = prompt('I know my accent\'s a little thick, so let\'s try this again:\nWould you like to get some food or are you just stopping in for drinks?');
    foodOrDrinks.toLowerCase();
}

