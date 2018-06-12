// Ejercicio 1 de Reverse
// const reverse = (array) => {
//   let resultArray = []
//   for (let i = 0; i < array.length; i++) {
//     resultArray[i] = array[array.length - 1 - i];
//   }
//   return resultArray;
// }

// const array = [3, 4, 1, 5, 7];

// console.log(array);
// console.log(reverse(array));


const reverse = (array) => {
  let aux = 0;
  for (let i = 0; i < array.length / 2; i++) {
    aux = array[i]
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = aux;
  }
  return array;
}

const array = [3, 4, 1, 5, 7, 'd'];

console.log(array);
console.log(reverse(array));
