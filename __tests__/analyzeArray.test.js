import analyzeArray from "../src/analyzeArray";

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

describe("\nanalyzeArray: function that takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  test("should exist", () => {
    expect(analyzeArray).toBeDefined();
  });

  test("analyzeArray(10,'') should return an error", () => {
    expect(() => analyzeArray(10, "")).toThrow(
      "The parameter must be an array of numbers!"
    );
  });

  test(`analyzeArray([1,8,3,4,2,6]) should return ${JSON.stringify(
    object
  )} `, () => {
    expect(object).toEqual(analyzeArray([1, 8, 3, 4, 2, 6]));
  });
});
