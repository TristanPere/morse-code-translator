import {morsecode} from "./morse-data-object";

const englishInput = document.querySelector("#english-input")
const morseInput = document.querySelector("#morse-input")

export const englishToMorse = (english) => {
   return morsecode.english
}

console.log(englishToMorse("a"))