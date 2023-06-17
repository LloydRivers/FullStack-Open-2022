const intersection = (arr) => {
  const flattened = arr.flat();
  const hashMap = flattened.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});

  const result = Object.keys(hashMap)
    .filter((key) => hashMap[key] === arr.length)
    .map(Number);
  return result;
};

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
