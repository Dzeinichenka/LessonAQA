const { TestWatcher } = require('jest');
const Calculator = require('../src/calculator');

const calculator = new Calculator();

describe('Calculator tests', function() {

    test('Adding numbers', async() => {
        let result = calculator.add(2, 4);
        expect(result).toBe(6);
    });

    test('Adding numbers', async() => {
        let result = calculator.add('2', '4');
        expect(result).toBe('6');
    });

    test('Adding numbers', async() => {
        let result = calculator.add(0, 0);
        expect(result).toBe(0);
    });

    test('Adding large numbers', async() => {
        let result = calculator.add(123456789,987654321);
        expect(result).toBe(1111111110);
    });


    test('Multiplication of numbers', async() => {
        let result = calculator.multiply(2, 4);
        expect(result).toBe(8);
    });

    test('Multiplication by zero', async() => {
        let result = calculator.multiply(2, 0);
        expect(result).toBe(0);
    });

    test('Multiplication of large numbers', async() => {
        let result = calculator.multiply(123456789, 2);
        expect(result).toBe(246913578);
    });

    test('Division by zero', async() => {
        let result = calculator.divide(4, 0);
        expect(result).toBe(0);
    });

    test('Subtracting numbers', async() => {
        let result = calculator.subtraction(12345678, 12345679);
        expect(result).toBe(-1);
    });

    test('Subtracting numbers', async() => {
        let result = calculator.subtraction(12345678, 12345678);
        expect(result).toBe(0);
    });

    test('Exponentiation', async() => {
        let result = calculator.exponentiation(11);
        expect(result).toBe(121);
    });


})