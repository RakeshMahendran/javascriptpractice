var removeDuplicates = function(nums) {
  let n = nums.length - 1
  
  let expectedNums = []
  
  for (let i=0; i <= n; i++) {
      cele = nums[i]

      if(!expectedNums.includes(cele)){
        expectedNums.push(cele)
      }
  }
  return expectedNums
};

nums = [1,2,3,4,5,5,6,6]

console.log(removeDuplicates(nums))