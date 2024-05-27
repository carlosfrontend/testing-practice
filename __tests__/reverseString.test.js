import { expect, test } from "@jest/globals";
import reverseString from "../src/reverseString";

describe("\nreverseString: function that takes a string and returns it reversed", () => {
  test("should exist", () => {
    expect(reverseString).toBeDefined();
  });
  test('reverseString("Hello") should return "olleH', () => {
    expect(reverseString("Hello")).toMatch(/^olleH$/);
  });

  test('reverseString("biCycle") should return "elcyCib"', () => {
    expect(reverseString("biCycle")).toMatch(/^elcyCib$/);
  });

  test("reverseString(210) should return an error", () => {
    expect(() => reverseString(210)).toThrow(
      /^The function parameter must be a string!$/
    );
  });

  test("reverseString('') should return an error", () => {
    expect(() => reverseString("")).toThrow(
      /^The function parameter must be a string!$/
    );
  });

  test("reverseString(true) should return an error", () => {
    expect(() => reverseString(true)).toThrow(
      /^The function parameter must be a string!$/
    );
  });

  test("reverseString('kayak') should return kayak", () => {
    expect(reverseString("kayak")).toMatch(/^kayak$/);
  });

  test("reverseString('You only fail when you stop trying') should return 'gniyrt pots uoy nehw liaf ylno uoY' ", () => {
    expect(reverseString("You only fail when you stop trying")).toMatch(
      /^gniyrt pots uoy nehw liaf ylno uoY$/
    );
  });
});
