//Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
//Using quick sort

//What is quick sort?

//Quick Sort is basically a algorithm which sorts the given array with the help of Divide and conquer rule,
// basically it divides the array into two halves and then it recursively divides the following array like n/2,n/4 etc.
// and it will stop when the length of array becomes 1 then it will start to concatenate all the arrays from the lower level

arr = [-60,100,40,-2,80]

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length -1] // so basically we need to choose a pivot element from the array
    //the pivot element can be a random number
    //but preferably first element or last element 

    let left = []
    let right =[]
    //initializing arrays to divide the primary array
    for (let i=0; i<arr.length; i++) {
      if(pivot > arr[i]){
         left.push(arr[i])
      }
      if(pivot < arr[i]){
         right.push(arr[i])
      }
    //Then looping it using for loop and applying conditions to create left and the right array 

    }
   return [...quickSort(left),pivot,...quickSort(right)]
   //then concatenating the arrays
}   
//the first element will the minimum one  and the last element will be maximum one

console.log("quciksorted",quickSort(arr),"min",arr[0],"max",arr[arr.length-1])

//Output: 
// hi 
// 4
// 1


