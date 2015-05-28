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

var subtotal = 0;

if (foodOrDrinks === 'drinks'){
    drinks(subtotal);
};

function drinks(total){
    alert('Great! We\'ve got coffee and tea for $3, soda and juice for $2.50, and wine and beer for $6.');
    var order = prompt('What can I do ya for?');
    order.toLowerCase();
    if (order === 'coffee' || order === 'tea'){
        total += 3;
    } else if (order === 'soda' || order === 'juice'){
        total += 2.5;
    } else if (order === 'wine' || order === 'beer'){
        total += 6;
    } else {
        order = prompt('Take yer time. As a reminder:\nWe\'ve got coffee and tea for $3, soda and juice for $2.50, and wine and beer for $6.');
        order.toLowerCase();
    }
};