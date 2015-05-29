/*
 Craig Basol
 5/28/15
 Section 01
 Functions Assignment
 */

// Simple cafe register-style calculation... something

alert('\'Ello there, name\'s Pip! Welcome to the cafe!');

var foodOrDrinks = prompt('Would you like to get some food or are you just stopping in for drinks?');
foodOrDrinks = foodOrDrinks.toLowerCase();

while (foodOrDrinks != 'food' && foodOrDrinks != 'drinks'){
    foodOrDrinks = foodOrDrinks.toLowerCase();
    foodOrDrinks = prompt('I know my accent\'s a little thick, so let\'s try this again:\nWould you like to get some food or are you just stopping in for drinks?');
}

var totalDrinks = 0;
var totalFood = 0;

if (foodOrDrinks === 'drinks'){
    var totalDrinks = drinks(totalDrinks);
    console.log(totalDrinks);
} else {
    var totalFood = food(totalFood, totalDrinks);

    var foodDrinks = prompt('Brilliant, would you like something to drink with that?\n (Please answer yes or no)');
    while (foodDrinks != 'yes' && foodDrinks != 'no') {
        prompt('Don\'t worry about it, I just want to know if you\'ll be needin\' anythin\' t\'drink.\n(Please answer yes or no)')
    }
    if (foodDrinks === 'yes') {
        var totalDrinks = drinks(totalDrinks);
        //console.log(drinkTotal);
    } else if (foodDrinks === 'no') {
    }
    console.log(totalFood, totalDrinks);
}

var subtotal = function(totalDrinks, totalFood){
    var bill = totalDrinks + totalFood;
    return bill;
    console.log(bill);
};

var totalBill = subtotal(totalDrinks, totalFood);

alert('Your total today comes to $'+totalBill);
console.log('Your total today comes to $'+totalBill);

function food(total) {
    alert('Great! We\'ve got fries for $5, salad for $4, and panini for $7.');
    var orderFood = prompt('What can I do ya for?');
    orderFood = orderFood.toLowerCase();
    var foodTotal = foodOrder(orderFood, total);
    //console.log(drinkTotal);
    var moreFood = prompt('Can I get ya anythin\' else?\n(Please answer yes or no)');
    moreFood = moreFood.toLowerCase();
    while (moreFood != 'yes' && moreFood != 'no') {
        prompt('Don\'t worry about it, I just want to know if you\'ll be needin\' anythin\' else.\n(Please answer yes or no)')
    }
    if (moreFood === 'yes') {
        var foodTotal = food(foodTotal);
        //console.log(drinkTotal);
    } else if (moreFood === 'no') {
    }
        return foodTotal;
    }

function foodOrder(order, currentTotal){
    var currentTotal = currentTotal;
    while (order != 'fries' && order != 'salad' && order != 'panini'){
        order = prompt('Take yer time. As a reminder:\nWe\'ve got fries for $5, salad for $4, and panini for $7.');
        order = order.toLowerCase();
    } if (order === 'fries'){
        currentTotal += 5;
        //console.log(currentTotal);
    } else if (order === 'salad'){
        currentTotal += 4;
        //console.log(currentTotal);
    } else if (order === 'panini'){
        currentTotal += 7;
        //console.log(currentTotal);
    }
    return currentTotal;
    //console.log(currentTotal);
}

function drinks(total){
    alert('Great! We\'ve got coffee and tea for $3, soda and juice for $2, and wine and beer for $6.');
    var order = prompt('What can I do ya for?');
    order = order.toLowerCase();
    var drinkTotal = drinkOrder(order, total);
    //console.log(drinkTotal);
    var moreDrinks = prompt('Can I get ya anythin\' else?\n(Please answer yes or no)');
    moreDrinks = moreDrinks.toLowerCase();
    while (moreDrinks != 'yes' && moreDrinks != 'no'){
        prompt('Don\'t worry about it, I just want to know if you\'ll be needin\' anythin\' else.\n(Please answer yes or no)')
    } if (moreDrinks === 'yes'){
        var drinkTotal = drinks(drinkTotal);
        //console.log(drinkTotal);
    } else if (moreDrinks === 'no'){
        //console.log('Total is $'+subtotal);
    }
    return drinkTotal;
}

function drinkOrder(order, currentTotal){
    var currentTotal = currentTotal;
    while (order != 'coffee' && order != 'tea' && order != 'soda' && order != 'juice' && order != 'wine' && order != 'beer'){
        order = prompt('Take yer time. As a reminder:\nWe\'ve got coffee and tea for $3, soda and juice for $2, and wine and beer for $6.');
        order = order.toLowerCase();
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

/*
I ordered up a salad and a beer and came up with a total of $10
A straight beer came out to $6
Three beers came to $18
 */