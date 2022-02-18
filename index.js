const fs = require("fs");
let libro;

try {
  const data = fs.readFileSync("../Librico.txt", "utf8");
  libro = data;
} catch (err) {
  console.error(err);
}

const totalBookWords = getWords(libro).length;
const arrayOfBookWords = getWords(libro);
let listOfRepeatedWords = {};

function getWords(text) {
  let x = text.replace(/[^A-Za-z]+/g, " ");
  let newArr = x.trim().split(" ");
  return newArr;
}

const sortWords = (currentListOfWords) => {
  return Object.fromEntries(
    Object.entries(currentListOfWords).sort(([, a], [, b]) => b - a)
  );
};

for (let i = 0; i < totalBookWords; i++) {
  const currentWord = arrayOfBookWords[i];
  if (listOfRepeatedWords[currentWord]) {
    listOfRepeatedWords[currentWord] = listOfRepeatedWords[currentWord] + 1;
  } else {
    listOfRepeatedWords[currentWord] = 1;
  }
}

let sortWordsByUse = sortWords(listOfRepeatedWords);
let arrayOfNumbersRepeatedWords = Object.values(sortWordsByUse);
let arrayOfMostRepeatedWordsByOrderOfUse = Object.keys(sortWordsByUse);
let sumOfRepeatedWordsByOrder = 0;

eighteenPerCent = (80 * totalBookWords) / 100;

let listOfTwentyPercentOfWordsToUnderstand = [];

for (let i = 0; i < totalBookWords; i++) {
  sumOfRepeatedWordsByOrder += arrayOfNumbersRepeatedWords[i];
  listOfTwentyPercentOfWordsToUnderstand = [
    ...listOfTwentyPercentOfWordsToUnderstand,
    arrayOfMostRepeatedWordsByOrderOfUse[i],
  ];
  if (sumOfRepeatedWordsByOrder >= eighteenPerCent) break;
}

console.log(
  "El ochecnta por ciento de las palabras del libro son",
  eighteenPerCent
);

console.log(
  "El libro usa",
  arrayOfNumbersRepeatedWords.length,
  "palabras distintas"
);

console.log(
  "El numero de palabras para entender el 80% de libro a entender es",
  listOfTwentyPercentOfWordsToUnderstand.length
);
let totalPercentajeOfWordsToUnderstand =
  (listOfTwentyPercentOfWordsToUnderstand.length * 100) /
  arrayOfNumbersRepeatedWords.length;

console.log(
  "El porcentaje de palabras a entender para entender el 80% del libro es",
  `${totalPercentajeOfWordsToUnderstand.toFixed(2)}% de las palabras`
);
console.log(
  `Ese ${totalPercentajeOfWordsToUnderstand.toFixed(2)}% es`,
  listOfTwentyPercentOfWordsToUnderstand
);
