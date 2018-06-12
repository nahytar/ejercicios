// function filterOddElements(arr) {
//   let arrayResult = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       arrayResult.push(arr[i]);
//     }
//   }
//   return arrayResult;
// }

const filterOddElementsb = (arr) => {
  let arrayResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      arrayResult.push(arr[i]);
    }
  }
  return arrayResult;
}