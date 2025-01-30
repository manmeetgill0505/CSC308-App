//Creates a portfolio with no tickers
function initializePortfolio() {
	return {}; /*An empty portfolio*/
}
function isEmpty(portfolio) {
	if (Object.keys(portfolio).length === 0) {
		return true;
	}
	return false;
}
	
function purchaseStocks(myObject, key, value) {
	if (value > 0) {
		if (myObject[key] !== undefined) {
			myObject[key] = myObject[key] + value;
		}
		else {
			myObject[key] = value;
		}
	}
	return myObject;
}

function sellStocks(myObject, key, decrement) {
	if (myObject[key] < decrement) {
		throw new Error('Not possible to sell this number of shares.');
	}
	myObject[key] = myObject[key] - decrement;
	if (myObject[key] == 0) {
		delete myObject[key];
	}
	return myObject;
}
function countStocks(myObject) {
	return Object.keys(myObject).length;
}

function countShares(myObject, key) {
	if (myObject[key] !== undefined) {
		return myObject[key];
	}
	return 0;
}


exports.countShares = countShares;
exports.countStocks = countStocks;
exports.sellStocks = sellStocks;
exports.purchaseStocks = purchaseStocks;
exports.initializePortfolio = initializePortfolio;
exports.isEmpty = isEmpty;