// github link : https://github.com/Rakibul-Hasan-Rifat/third-problem-solving-assignment


/*
||------------->>>>> function for converting kilometer to meter <<<<<-------------||
*/
function kilometerToMeter(km) {
    var meter;
    if (km <= 0) {
        var msg = 'Input Error! Please enter a valid number (greater than 0).';
        return msg;
    } else {
        meter = km * 1000;
        return meter;
    }
}


/*
||------------->>>>> function for calculation to buy some elements <<<<<-------------||
*/
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        var msg = 'Invalid number has been inputted! Please enter a valid number (greater than or equal to 0) for every element.'
        return msg;
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}


/*
||----------->>>> function for calculating the cost of hotel to stay there <<<<-----------||
*/
function hotelCost(daysOfStayingAtHotel) {
    var totalCost = 0;
    if (daysOfStayingAtHotel < 0) {
        var msg = "Invalid input! Days can't be negative.";
        return msg;
    }
    if (daysOfStayingAtHotel <= 10) {
        totalCost = daysOfStayingAtHotel * 100;
    }
    else if (daysOfStayingAtHotel <= 20) {
        var costOfFirstTenDays = 10 * 100;
        var remainingDays = daysOfStayingAtHotel - 10;
        var costOfSecondSomeDays = remainingDays * 80;
        totalCost = costOfFirstTenDays + costOfSecondSomeDays;
    }
    else {
        var costOfFirstTenDays = 10 * 100;
        var costOfSecondTenDays = 10 * 80;
        var remainingDays = daysOfStayingAtHotel - 20;
        var costOfMoreThanTwentyDays = remainingDays * 50;
        totalCost = costOfFirstTenDays + costOfSecondTenDays + costOfMoreThanTwentyDays;
    }
    return totalCost;
}


/*
||----------->>>> function to print the name with highest character <<<<-----------||
*/
function megaFriend(friends) {
    if (friends.length === 0) {
        var msg = 'Input at least one name.';
        return msg;
    }
    else {
        var longestName = friends[0];
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length > longestName.length) {
                longestName = friends[i];
            }
        }
        return longestName;
    }
}