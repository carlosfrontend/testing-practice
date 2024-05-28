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
    const cipherArr = [];
    const regex = /[\W]/g;
    const space = /\s/g;
    const underscore = /_/g;
    const number = /\d/g;

    for (let i = 0; i < str.length; i++) {
      let index = plainAlphabet.indexOf(str[i].toLowerCase());

      if (regex.test(str[i])) {
        cipherArr.push(str[i]);
      } else if (space.test(str[i])) {
        cipherArr.push(" ");
      } else if (underscore.test(str[i])) {
        cipherArr.push("_");
      } else {
        if (str[i] === str[i].toUpperCase()) {
          cipherArr.push(getCipherAlphabet()[index].toUpperCase());
        }
        if (str[i] === str[i].toLowerCase()) {
          cipherArr.push(getCipherAlphabet()[index].toLowerCase());
        }
      }
    }
    return cipherArr.join("");
  };

  return createCipherText();
};

export default caesarCipher;
