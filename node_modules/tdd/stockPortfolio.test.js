const myFunctions = require('./stockPortfolio.js');
// Setup functions
beforeEach( () => {
});

beforeAll( () => {
});

// //Teardown functions
afterEach( () => {

});

afterAll( () => {

});

test('Test for a new Portfolio', () => {
	const portfolio = myFunctions.initializePortfolio();
	const target = {};
	expect(portfolio).toEqual(target);
});
/*-----------------------------initializePortfolio-------------------------------*/
test('Test for the isEmpty function - Truthy', () => {
	const portfolio = myFunctions.initializePortfolio();
	const result = myFunctions.isEmpty(portfolio);
	expect(result).toBeTruthy();
});

test('Test for the isEmpty function - Falsy', () => {
	const portfolio = {'NVDA': 3};
	const result = myFunctions.isEmpty(portfolio);
	expect(result).toBeFalsy();
});
/*-----------------------------------isEmpty--------------------------------------*/
test('Test for making purchasing a stock', () => {
	let result = myFunctions.initializePortfolio();
	result = myFunctions.purchaseStocks(result, 'NVDA', 6);
	expect(result).toEqual({'NVDA': 6});
});

test('Test for making two stock purchases', () => {
	let result = myFunctions.initializePortfolio();
	result = myFunctions.purchaseStocks(result, 'NVDA', 6);
	result = myFunctions.purchaseStocks(result, 'MSFT', 3);
	expect(result).toEqual({'NVDA': 6, 'MSFT': 3});
});
/*---------------------------------purchaseStocks------------------------------------------*/
test('Test for selling a stock', () => {
	let result = myFunctions.initializePortfolio();
	result = myFunctions.purchaseStocks(result, 'NVDA', 6);
	result = myFunctions.purchaseStocks(result, 'MSFT', 3);
	result = myFunctions.sellStocks(result, 'NVDA', 3);
	expect(result).toEqual({'NVDA': 3, 'MSFT': 3});
});
test('Test for 0 shares stock when selling', () => {
	let result = {'NVDA': 3, 'MSFT': 3};
	result = myFunctions.sellStocks(result, 'NVDA', 3);
	expect(result).toEqual({'MSFT': 3});
});

test('Test if sellStocks throws an Error', () => {
	let result = {'NVDA': 3, 'MSFT': 3};
	expect(() => myFunctions.sellStocks(result, 'MSFT', 6)).toThrow("Not possible to sell this number of shares.");
});
/*-----------------------------------sellStocks-------------------------------------------*/
test('Test for two counting stocks', () => {
	const result = {'NVDA': 3, 'MSFT': 3};
	const stockCount = myFunctions.countStocks(result);
	expect(stockCount).toEqual(2);
});

test('Test for only one counting stocks', () => {
	const result = {'MSFT': 3,};
	const stockCount = myFunctions.countStocks(result);
	expect(stockCount).toEqual(1);
});
/*-----------------------------------countStocks-------------------------------------*/
test('Test for counting shares', () => {
	const result = {'NVDA': 3, 'MSFT': 9};
	const shareCount = myFunctions.countShares(result, 'MSFT');
	expect(shareCount).toEqual(9);
});

test('Test for counting shares after purchasing', () => {
	let result = {'NVDA': 1, 'MSFT': 9};
	result = myFunctions.purchaseStocks(result, 'MSFT', 3);
	const shareCount = myFunctions.countShares(result, 'MSFT');
	expect(shareCount).toEqual(12);
});

/*-----------------------------------countShares-------------------------------------------*/

/*Reflection

I was almost able to follow the red-green-refactor cycle.
I did make function tests first and then the function itself.
However, sometimes the tests were not functional due to error, which
I would have to fix after I had made the functions. The refactoring
part went well and I was able to make it work and think of most scenarios*/