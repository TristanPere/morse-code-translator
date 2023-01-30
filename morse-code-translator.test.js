const { it } = require("node:test");

describe("englishToMorse", () => {
  it("Should return a string", () => {
    const translatedString = englishToMorse("Hello");
    expect(typeof translatedString).toMatch("string");
  });
  it("Should return '.-' when given a string of 'a'", () => {
    const translatedString = englishToMorse("a");
    expect(translatedString).toBe(".-");
  });
  it("Should return '.----' when given a number of '1'", () => {
    const translatedString = englishToMorse("1");
    expect(translatedString).toBe(".----");
  });
  it("Should return a '/' when given a space", () => {
    const translatedString = englishToMorse(" ");
    expect(translatedString).toBe("/");
  });
  it("Should split a word into morse letters with spaces inbetween", () => {
    const translate = englishToMorse("Hi");
    expect(translatedString).toBe(".... ..");
  });
  it("Should handle a multicharacter string input", () => {
    const translatedString = englishToMorse("Hello world!");
    expect(translatedString).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--"
    );
  });
  it("Should translate untranslatable characters into '#'", () => {
    const translatedString = englishToMorse("¦");
    expect(translatedString).toBe("#");
  });
  it("Should contain an error message editor an error message when untranslateable characters are input", ()=>{
    const translatedString = englishToMorse("¦")
    const errorMessage = errorMessageArr.join()
    expect(errorMessage).toBe("Error in input. Cannot translate: ¦")
  })
  it("Should translate translatable characters and leave untranslatable characters in same string", ()=>{
    const translatedString = englishToMorse("Hello wor¦d!");
    expect(translatedString).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. # -.-.--");
  })
  it("Should handle special characters", () => {
    const translatedString = englishToMorse("&");
    expect(translatedString).toBe(".-...");
  });
});



describe("morseToEnglish", () => {
  it("Should return a string", () => {
    const translatedString = morseToEnglish(".... . .-.. .-.. ---");
    expect(typeof translatedString).toMatch("string");
  });
  it("Should return 'a' when given a string of '.-'", () => {
    const translatedString = morseToEnglish(".-");
    expect(translatedString).toBe("a");
  });
  it("Should return '.----' when given a number of '1'", () => {
    const translatedString = morseToEnglish(".----");
    expect(translatedString).toBe("1");
  });
  it("Should return ' ' when given '/'", () => {
    const translatedString = morseToEnglish("/");
    expect(translatedString).toBe(" ");
  });
  it("Should remove spaces between morse letters to have joined words", () => {
    const translate = morseToEnglish(".... ..");
    expect(translatedString).toBe("hi");
  });
  it("Should handle special characters", () => {
    const translatedString = morseToEnglish(".-...");
    expect(translatedString).toBe("&");
  });
  it("Should handle a multicharacter string input", () => {
    const translatedString = morseToEnglish(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--"
    );
    expect(translatedString).toBe("Hello world!");
  });
  it("Should leave untranslatable characters alone in output", () => {
    const translatedString = morseToEnglish("#");
    expect(translatedString).toBe("#");
  });
  it("Should leave non-morse code characters alone", () => {
    const translatedString = morseToEnglish(".... a ..");
    expect(translatedString).toBe("hai");
  });
  it("Should take non-morse dot-dashes and return them un-eddited in output",()=>{
    const translatedString = morseToEnglish("......");
    expect(translatedString).toBe("......");
  })
});
