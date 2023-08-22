function alternatePositive(positive, negative) {
  const posLen = positive.length;
  const negLen = negative.length;

  let newArr = [];

  for (let i = 0; i < posLen; i++) {
    newArr.push(positive[i]);
    newArr.push(negative[i]);
  }
  return newArr;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [-1, -2, -3, -4, -5, -6, -7];

console.log("alternatePositive:", alternatePositive(arr1, arr2));
