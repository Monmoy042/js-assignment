// Repository Link:

// Conversion from Kilometer to Meter
function kilometerToMeter(kilometer) {
	if (kilometer == 0) {
		return 0;
	} else if (kilometer == 1) {
		return 1000;
	} else if (kilometer < 0) {
		return 'Distance cannot be negative!';
	} else {
		var meter = kilometer * 1000;
		return meter;
	}
}
var result = kilometerToMeter(2);
console.log(result);

// Electronic Budget Calculator
function budgetCalculator(watch, phone, laptop) {
		var watchPrice = watch * 50;
		var phonePrice = phone * 100;
		var laptopPrice = laptop * 500;
		var result = watchPrice + phonePrice + laptopPrice;
	return result;
}
var total = budgetCalculator(2, 2, 1);
console.log(total);

// Hotel Cost Calculation
function hotelCost(days) {
	if (days <= 10) {
		var totalPrice = 0;
		var firstPrice = days * 100;
		var totalPrice = totalPrice + firstPrice;
	} else if (days <= 20) {
		var firstPrice = 10 * 100;
		var remainingDays = days - 10;
		var secondPrice = remainingDays * 80;
		var totalPrice = firstPrice + secondPrice;
	} else {
		var firstPrice = 10 * 100;
		var secondPrice = 10 * 80;
		var remainingDays = days - 20;
		var thirdPrice = remainingDays * 50;
		var totalPrice = firstPrice + secondPrice + thirdPrice;
	}
	return totalPrice;
}

var result = hotelCost(22);
console.log(result);

// Find out the friend's largest name of an array
function megaFriend(friends) {
	var megaName;
	var len = 0;
	for (var i = 0; i < friends.length; i++) {
		if (friends[i].length > len) {
			var len = friends[i].length;
			megaName = friends[i];
		}
	}
	return megaName;
}
var friends = ['Avijit', 'Rahi', 'Fahim', 'Nabil', 'Ovi'];
var result2 = megaFriend(friends);
console.log(result2);
