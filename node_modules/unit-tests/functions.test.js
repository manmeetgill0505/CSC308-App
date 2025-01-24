const myFunctions = require('./functions.js');

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

test('Testing sum with zero', () => {
    const target = 30;
    const result = myFunctions.sum(30, 0);
    expect(result).toBe(target);
});

test('Testing sum', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(result).toBe(target);
});

test('Testing sum negative numbers', () => {
    const target = -30;
    const result = myFunctions.sum(-12, -18);
    expect(result).toBe(target);
});

test('Testing sum floating numbers', () => {
	const target = 1.4;
	const result = myFunctions.sum(0.6, 0.8);
	expect(result).toBeCloseTo(target);
});
/* -------------------Sum Testing Ended Here-----------------------------*/

test('Testing div with zero', () => {
	const target = 0;
	const result = myFunctions.div(0, 3);
	expect(result).toBe(target);
});

test('Testing div by zero', () => {
	const result = myFunctions.div(3,0);
	expect(result).toBeUndefined();
});

test('Testing div', () => {
	const target = 3;
	const result = myFunctions.div(6,2);
	expect(result).toBe(target);
});

test('Testing div negative numbers', () => {
	const target = -3;
	const result = myFunctions.div(-24, 8);
	expect(result).toBe(target);
});

test('Testing div floating numbers', () => {
	const target = 1.3;
	const result = myFunctions.div(2.6, 2);
	expect(result).toBeCloseTo(target);
});
/*------------------Div Testing Ended Here----------------------------*/

test('Testing containsNumbers', () => {
	const result = myFunctions.containsNumbers("o1ut");
	expect(result).toBeTruthy();
});

test('Testing containsNumbers with number at the end', () => {
	const result = myFunctions.containsNumbers("ouwet1");
	expect(result).toBeTruthy();
});

test('Testing containsNumbers with no number', () => {
	const result = myFunctions.containsNumbers("out");
	expect(result).toBeFalsy();
});

test('Testing containsNumbers with more than one number', () => {
	const result = myFunctions.containsNumbers("ou1tofmin2d");
	expect(result).toBeTruthy();
});

test('Testing containsNumbers with space', () => {
	const result = myFunctions.containsNumbers("outofmind 2");
	expect(result).toBeTruthy();
});

test('Testing containsNumbers with only numbers', () => {
	const result = myFunctions.containsNumbers("12345");
	expect(result).toBeTruthy();
});

test('Testing containsNumbers with only characters and a space', () => {
	const result = myFunctions.containsNumbers("Hello World");
	expect(result).toBeFalsy();
});

/*--------------containsNumbers Testing Ended Here-----------------------*/