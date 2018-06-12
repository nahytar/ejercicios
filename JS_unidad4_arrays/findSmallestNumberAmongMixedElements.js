const findSmallestNumberAmongMixedElements = (arr) => {
  if (arr.length < 1) {
    return 0;
  } else {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i]) && arr[i] < min) {
        min = arr[i];
      }

    }
    return isNaN(min) ? 0 : min;
  }
}