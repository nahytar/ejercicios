// function findShortestWordAmongMixedElements(arr) {
//   let min;

//   for (let i = 0; i < arr.length; i++) {
//     if (min === undefined || arr[i].length < min.length) {
//       min = arr[i];
//     }    
//   }

//   if (min === undefined) {
//     return "";
//   } else {
//     return min;
//   }
// }

const findShortestWordAmongMixedElements = (arr) => {
  if (arr.length < 1) {
    return "";
  } else {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (typeof min != "string") {
        min = arr[i]
      } else {
        if (typeof arr[i] == "string" && arr[i].length < min.length) {
          min = arr[i];
        }
      }
    }
    return typeof min == "string" ? min : "";
  }
}