const findPairForSum = (array, result) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] == result) {
        return [array[i], array[j]]
      }
    }
  }
}

console.log(findPairForSum([0, 8, 1, 7, 19, 12, 4], 1));
