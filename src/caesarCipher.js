const caesarCipher = (str, shiftF) => {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const getCipherAlphabet = () => {
    const cipherAlphabet = [];
    const chunk = plainAlphabet.slice(0, shiftF);
    for (let i = shiftF; i < plainAlphabet.length; i++) {
      cipherAlphabet.push(plainAlphabet[i]);
    }
    for (let j = 0; j < chunk.length; j++) {
      cipherAlphabet.push(chunk[j]);
    }
    return cipherAlphabet;
  };

  const createCipherText = () => {
    const cipherTextArray = [];
    let index;
    let regex = /[\W_\d]/;

    for (let i = 0; i < str.length; i++) {
      index = plainAlphabet.findIndex((el) => {
        return el.toUpperCase() === str[i] || el.toLowerCase() === str[i];
      });
      if (regex.test(str[i])) {
        cipherTextArray.push(str[i]);
      } else {
        if (str[i].toUpperCase() === str[i]) {
          cipherTextArray.push(getCipherAlphabet()[index].toUpperCase());
        } else {
          cipherTextArray.push(getCipherAlphabet()[index].toLowerCase());
        }
      }
    }
    return cipherTextArray.join("");
  };

  if (typeof str === "string" && typeof shiftF === "number") {
    return createCipherText();
  }
  throw new Error(
    "First parameter must be a string and second parameter must be a number"
  );
};

export default caesarCipher;
