class Calculator {
  constructor(number) {
    this.number = number;
  };

  add(other) {
    return this.number + other.number;
  };

  subtract(other) {
    return this.number - other.number;
  };

  multiply(other) {
    return this.number * other.number;
  };

  divide(other) {
    return this.number / other.number;
  };

  isEven(other) {
    return this.number % 2 === 0;
  }
}

exports.Calculator = Calculator;
