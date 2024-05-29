import calculator from "../src/calculator";

describe("\nobject that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation", () => {
  test("calculator should exist", () => {
    expect(calculator).toBeDefined();
  });

  test("add method should exist", () => {
    expect(calculator.add).toBeDefined();
  });

  test("subtract method should exist", () => {
    expect(calculator.subtract).toBeDefined();
  });

  test("divide method should exist", () => {
    expect(calculator.divide).toBeDefined();
  });

  test("multiply method should exist", () => {
    expect(calculator.multiply).toBeDefined();
  });
});

describe("\nTests for add method", () => {
  test("add() should return an error", () => {
    expect(() => calculator.add()).toThrowError(
      "Both parameters must be numbers!"
    );
  });

  test("add(5,2) should return 7", () => {
    expect(calculator.add(5, 2)).toBe(7);
  });
  test("add('&',9) should return an error", () => {
    expect(() => calculator.add("&", 9)).toThrow(
      /^Both parameters must be numbers!$/
    );
  });
  test("add(-8,3) should return -5", () => {
    expect(calculator.add(-8, 3)).toBe(-5);
  });

  test("add(1,-3) should return -2", () => {
    expect(calculator.add(1, -3)).toBe(-2);
  });

  test("add(0.1,0.2) should return 0.3", () => {
    expect(calculator.add(0.1, 0.2)).toBe(0.3);
  });
  test("add(3,-50) should return -47", () => {
    expect(calculator.add(3, -50)).toBe(-47);
  });
  test("add(-10,-20) should return -30", () => {
    expect(calculator.add(-10, -20)).toBe(-30);
  });
});

describe("\nTests for subtract method", () => {
  test("subtract() should return an error", () => {
    expect(() => calculator.subtract()).toThrowError(
      "Both parameters must be numbers!"
    );
  });
  test("subtract(58,40) should return 18", () => {
    expect(calculator.subtract(58, 40)).toBe(18);
  });
  test("subtract(-10,20) should return -30", () => {
    expect(calculator.subtract(-10, 20)).toBe(-30);
  });

  test("subtract(-100,-80) should return -20", () => {
    expect(calculator.subtract(-100, -80)).toBe(-20);
  });
  test("subtract(5,-10) should return 15", () => {
    expect(calculator.subtract(5, -10)).toBe(15);
  });
  test("subtract('W','A') should return an error", () => {
    expect(() => calculator.subtract("W", "A")).toThrow(
      /^Both parameters must be numbers!$/
    );
  });
  test("subtract(-0.1,0.2) should return -0.3", () => {
    expect(calculator.subtract(-0.1, 0.2)).toBe(-0.3);
  });
  test("subtract(-10,-20) should return 10", () => {
    expect(calculator.subtract(-10, -20)).toBe(10);
  });
});

describe("\nTests for divide method", () => {
  test("divide(66 , 0) should return an error", () => {
    expect(() => calculator.divide(66, 0)).toThrowError(
      "It is not possible to divide by zero!"
    );
  });
  test("divide() should return an error", () => {
    expect(() => calculator.divide()).toThrow(
      /^Both parameters must be numbers!$/
    );
  });
  test("divide(12,4) should return 3", () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });
  test("divide(8,3) should return 2.67", () => {
    expect(calculator.divide(8, 3)).toBeCloseTo(2.67);
  });
  test("divide(125,82) should return 1.52", () => {
    expect(calculator.divide(125, 82)).toBeCloseTo(1.52);
  });
  test("divide(-5,4) should return -1.25", () => {
    expect(calculator.divide(-5, 4)).toBeCloseTo(-1.25);
  });
  test("divide(0.52,1250) should return 0.000416", () => {
    expect(calculator.divide(0.52, 1250)).toBeCloseTo(0.000416);
  });
  test("divide(350,-125) should return -2.8", () => {
    expect(calculator.divide(350, -125)).toBeCloseTo(-2.8);
  });
});

describe("\nTests for multiply method", () => {
  test("multiply() should return an error", () => {
    expect(() => calculator.multiply()).toThrow("Parameters must be numbers!");
  });
  test("multiply(23,3) should return 69", () => {
    expect(calculator.multiply(23, 3)).toBe(69);
  });
  test("multiply(0.1,0.2) should return 0.02", () => {
    expect(calculator.multiply(0.1, 0.2)).toBe(0.02);
  });
  test("multiply(-5,-40) should return 200", () => {
    expect(calculator.multiply(-5, -40)).toBe(200);
  });
  test("multiply('%','') should return an error", () => {
    expect(() => calculator.multiply("W", "A")).toThrow(
      /^Parameters must be numbers!$/
    );
  });
  test("multiply(15,-55) should return -825", () => {
    expect(calculator.multiply(15, -55)).toBe(-825);
  });
});
