/*
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/

// ADD CODE HERE
const groupBy = (array, callBack) => {
  // declare an empty object
  const obj = {};

  // iterate through the array
  for (let index = 0; index < array.length; index++) {
    // for each element, call the callback
    const element = array[index];
    const key = callBack(element);
    /*
    I am not sure how this next chunk of code, the if and else blocks are working.

    I think that the if block is checking to see if the key already exists in the object. If it does, then it pushes the element into the array that is the value of that key. If it doesn't, then it creates a new key with the value of an array with the element as the first element in the array.
    */
    if (obj[key]) {
      obj[key].push(element);
    } else {
      obj[key] = [element];
    }
  }

  return obj;
};

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
