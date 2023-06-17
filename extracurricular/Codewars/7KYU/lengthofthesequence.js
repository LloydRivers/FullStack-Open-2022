const lengthOfSequence = (arr, n) => {
  // Why do we need to declare length = 0?. Normally this would be in the first line of the loop e.g let length = 0; for (let i = 0; i < arr.length;

  let length = 0;
  let first = -1;
  let second = -1;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num === n) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        return 0;
      }
    }
  }

  if (first !== -1 && second !== -1) {
    // Not sure why you are adding 1 to the length here.
    length = second - first + 1;
  }

  return length;
};
