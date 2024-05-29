import analyzeArray from "../src/analyzeArray";

describe("\nanalyzeArray: function that takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  test("should exist", () => {
    expect(analyzeArray).toBeDefined();
  });
});
