const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {Integer} = require('../src/calculator.js');

describe('calculator', function() {
  describe('add', function() {
    it('Should add two numbers', function() {
      const number = new Integer(4);
      strictEqual(number.add(number), 8);
    })
  })
})

