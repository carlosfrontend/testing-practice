const { describe, test, expect } = require("@jest/globals");
import capitalize from "../src/capitalize";

describe("\ncapitalize module: function that takes a string and returns it with the first character capitalized", () => {
  test("should exist", () => {
    expect(capitalize).toBeDefined();
  });

  test('capitalize("hello") should return "Hello"', () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test('capitalize("THE BIG MOON") should return "The big moon"', () => {
    expect(capitalize("THE BIG MOON")).toBe("The big moon");
  });

  test("capitalize(5) should return an error", () => {
    expect(() => capitalize(5)).toThrow(
      /^Incorrect parameter, it must be an string!$/
    );
  });

  test("capitalize(true) should return an error", () => {
    expect(() => capitalize(true)).toThrow(
      /^Incorrect parameter, it must be an string!$/
    );
  });
  test("capitalize(false) should return an error", () => {
    expect(() => capitalize(false)).toThrow(
      /^Incorrect parameter, it must be an string!$/
    );
  });
  test("capitalize() should return an error", () => {
    expect(() => capitalize()).toThrow(
      /^Incorrect parameter, it must be an string!$/
    );
  });
  test('capitalize("jOhN") should return "John"', () => {
    expect(capitalize("jOhN")).toBe("John");
  });
});
