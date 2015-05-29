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

var totalDrinks = 0;
var totalFood = 0;
var subtotal = 0;

if (foodOrDrinks === 'drinks'){
    var totalDrinks = drinks(subtotal);
    console.log(totalDrinks);
} else {

}



function drinks(total){
    alert('Great! We\'ve got coffee and tea for $3, soda and juice for $2, and wine and beer for $6.');
    var order = prompt('What can I do ya for?');
    order.toLowerCase();
    var drinkTotal = drinkOrder(order, total);
    //console.log(drinkTotal);
    var more = prompt('Can I get ya anythin\' else?\n(Please answer yes or no)');
    more.toLowerCase();
    while (more != 'yes' && more != 'no'){
        prompt('Don\'t worry about it, I just want to know if you\'ll be needin\' anythin\' else.\n(Please answer yes or no)')
    } if (more === 'yes'){
        var drinkTotal = drinks(drinkTotal);
        //console.log(drinkTotal);
    } else if (more === 'no'){
        console.log('Total is $'+subtotal);
    }
    return drinkTotal;
}

function drinkOrder(order, currentTotal){
    var currentTotal = currentTotal;
    while (order != 'coffee' && order != 'tea' && order != 'soda' && order != 'juice' && order != 'wine' && order != 'beer'){
        order = prompt('Take yer time. As a reminder:\nWe\'ve got coffee and tea for $3, soda and juice for $2, and wine and beer for $6.');
        order.toLowerCase();
    } if (order === 'coffee' || order === 'tea'){
        currentTotal += 3;
        //console.log(currentTotal);
    } else if (order === 'soda' || order === 'juice'){
        currentTotal += 2;
        //console.log(currentTotal);
    } else if (order === 'wine' || order === 'beer'){
        currentTotal += 6;
        //console.log(currentTotal);
    }
    return currentTotal;
    //console.log(currentTotal);
}