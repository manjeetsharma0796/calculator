const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {Calculator} = require('../src/calculator.js');

describe('calculator', function() {
  describe('add', function() {
    it('Should add two numbers', function() {
      const number = new Calculator(4);
      strictEqual(number.add(number), 8);
    })
  })

  describe('subtract', function() {
    it('Should subtract two numbers', function() {
      const number = new Calculator(4);
      strictEqual(number.subtract(number), 0);
    })
  })

  describe('multiply', function() {
    it('Should multiply two numbers', function() {
      const number = new Calculator(4);
      strictEqual(number.multiply(number), 16);
    })
  })

  describe('divide', function() {
    it('Should divide two numbers', function() {
      const number = new Calculator(4);
      strictEqual(number.divide(number), 1);
    })
  })
})

