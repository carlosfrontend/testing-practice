const calculator = {
  add: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return +parseFloat(a + b).toPrecision(3);
    }
    throw new Error("Both parameters must be numbers!");
  },
  subtract: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return +parseFloat(a - b).toPrecision(3);
    }
    throw new Error("Both parameters must be numbers!");
  },
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("It is not possible to divide by zero!");
    }
    if (typeof a === "number" && typeof b === "number" && b !== 0) {
      return +parseFloat(a / b).toPrecision(3);
    }
    throw new Error("Both parameters must be numbers!");
  },
  multiply: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return +parseFloat(a * b).toPrecision(3);
    }
    throw new Error("Parameters must be numbers!");
  },
};

export default calculator;
