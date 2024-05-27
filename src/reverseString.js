const reverseString = (str) => {
  if (typeof str === "string" && str.length >= 1) {
    return [...str].reverse().join("");
  }
  throw new Error("The function parameter must be a string!");
};

export default reverseString;
