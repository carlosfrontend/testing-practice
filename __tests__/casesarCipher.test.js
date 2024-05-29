import { template } from "@babel/core";
import caesarCipher from "../src/caesarCipher";

describe("\ncaesarCipher function: takes a string and a shift factor and returns it with each character “shifted”.", () => {
  test("should exist", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("caesarCipher(5,'Hello') should return an error", () => {
    expect(() => caesarCipher(5, "Hello")).toThrow(
      'First parameter must be a string and second parameter must be a number'
    );
  });

  test("caesarCipher('xyz', 3) should return 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toMatch(/^abc$/);
  });
  test("caesarCipher('HeLLo', 3) should return 'KhOOr'", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch(/^KhOOr$/);
  });
  test("caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch(/^Khoor, Zruog!$/);
  });
  test("caesarCipher('The user name in The Odin Project is: _odinite48', 3) should return 'Wkh xvhu qdph lq Wkh Rglq Surmhfw lv: _rglqlwh48'", () => {
    expect(
      caesarCipher("The user name in The Odin Project is: _odinite48", 3)
    ).toMatch(/^Wkh xvhu qdph lq Wkh Rglq Surmhfw lv: _rglqlwh48$/);
  });
});
