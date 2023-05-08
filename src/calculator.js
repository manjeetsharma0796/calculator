class Integer {
  constructor(number) {
    this.number = number;
  };

  add(other) {
    return this.number + other.number;
  };

  subtract(other) {
    return this.number - other.number;
  };
}

exports.Integer = Integer;
