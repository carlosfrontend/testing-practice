const capitalize = (str) => {
  if (typeof str === "string") {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
  throw new Error("Incorrect parameter, it must be an string!");
};

export default capitalize;
