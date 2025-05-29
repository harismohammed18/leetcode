type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n <= 0) {
    return arr;
  }

  let input = arr;
  for (let i = 0; i < n; i++) {
    const output: MultiDimensionalArray = [];
    input.forEach((item) => {
      if (Array.isArray(item)) {
        output.push(...item);
        return;
      }
      output.push(item);
    });
    input = [...output];
  }
  return input;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
