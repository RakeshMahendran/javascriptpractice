var kidsWithCandies = function (candies, extraCandies) {
  let noOfKids = candies.length;
  console.log("noOfKids: " + noOfKids);
  let sortedCandidates = candies.sort();
  let maxNumber = sortedCandidates
  maxNumber = maxNumber[maxNumber.length - 1];
  var result = [];
  for (let i = 0; i < noOfKids; i++) {
    let resultValue = candies[i] + extraCandies;
    console.log("resultValue: " + resultValue)
    if (resultValue > maxNumber) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

let candies = [4, 5, 3, 1, 2];
let extraCandies = 3;

console.log("result", kidsWithCandies(candies, extraCandies));
