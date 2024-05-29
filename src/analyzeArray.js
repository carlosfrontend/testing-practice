const analyzeArray = (arr) => {
  let average, min, max, length;
  const checkParameter = (el) => {
    return typeof el === "number";
  };

  if (Array.isArray(arr) && arr.every((el) => checkParameter(el))) {
    average = (() => {
      return arr.reduce((prev, curr) => prev + curr) / arr.length;
    })();
    min = (() => {
      return Math.min(...arr);
    })();
    max = (() => {
      return Math.max(...arr);
    })();
    length = (() => {
      return arr.length;
    })();
  } else {
    throw new Error("The parameter must be an array of numbers!");
  }

  return { average, min, max, length };
};

export default analyzeArray;
