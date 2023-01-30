import { morseCode, alphabet} from "./morse-data-object.js";
const englishInput = document.querySelector("#english-input");
const morseInput = document.querySelector("#morse-input");
const morseButton = document.querySelector("#morse-button")

export const englishToMorse = (english) => {
    const englishStringArr = english.toLowerCase().split("")
    const morseStringArr = englishStringArr.map((character) => {
        if (morseCode[character]) {
            return morseCode[character]
        } else {
            return "#"
        }
    });
    const morseString = morseStringArr.join(" ")
    return morseString
};
const handleMorseTranslation = (event) => {
    morseInput.value = englishToMorse(event.target.value)
    let morse = new morseSynth();
    morse.play(event.target.value);
}
export const morseToEnglish = (morse) => {
    const morseStringArr = morse.split(" ")
    console.log(morseStringArr)
    const englishStringArr = morseStringArr.map((morse) =>{
        if (alphabet[morse]) {
            return alphabet[morse]
        } else if (alphabet[morse] == " "){
            return ""
        } else{
            return "#"
        }
    })
    const englishString = englishStringArr.join("")
    return englishString
}

const handleEnglishTranslation = (event) =>{
    englishInput.value=morseToEnglish(event.target.value)
    let morse = new morseSynth();
    morse.play(morseToEnglish(event.target.value));
}

const handleButton =()=>{
    let morse = new morseSynth();
    morse.play("hello world");
}

morseButton.addEventListener("click", handleButton)
morseInput.addEventListener("change", handleEnglishTranslation)
englishInput.addEventListener("change" , handleMorseTranslation)

