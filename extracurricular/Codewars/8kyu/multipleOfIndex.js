function multipleOfIndex(array, index) {
  let result = [];

  if (index >= array.length) {
    return [];
  }

  if (array[index] % index === 0) {
    result.push(array[index]);
  }

  let recursiveResult = multipleOfIndex(array, index + 1);
  result = result.concat(recursiveResult);
  return result;
}
