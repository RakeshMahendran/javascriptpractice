//Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
//Method 1
arr = [1,2,3,4]

function findMinMax(arr){
    console.log("hi")
    console.log(Math.max(...arr)) 
    //this "..." is the spread operator which separates each of the elements in the array or spread each of the elements in array
    console.log(Math.min(...arr))
}

findMinMax(arr)

//Output: 
// hi 
// 4
// 1
