// const computeAverageLengthOfWords = (words) => {
//   let totalLength = 0;
//   for (let i = 0; i < words.length; i++) {
//     totalLength += words[i].length;
//   }
//   return totalLength / words.length;
// }

// console.log(computeAverageLengthOfWords(["hola", "mundo"]));


const computeAverageLengthOfWords = (word1, word2) => {
  return (word1.length + word2.length)/2;
}

console.log(computeAverageLengthOfWords("hola", "mundo"));