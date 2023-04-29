var arr = [20,30,6,3,4,8,9]
function sortArr (arr){
    if(arr.length <=1 ){
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    return merge(sortArr(left),sortArr(right))
}

function merge(left,right){
    const sortArr = []
    while(left.length && right.length) {
       if(left[0] < right[0]){
         sortArr.push(left.shift())
       } else {
        sortArr.push(right.shift())
       }
       }
    return [...sortArr,...left,...right]
    
    }
   


console.log("merge",sortArr(arr))


function twoSum(arr,target){

    let start = 0
    let end = arr.length - 1

    while(start<end) {
     let sum = arr[start] + arr[end]
     if(sum === target) {
        return [start, end];
     } else if (sum<target){
        start++
     } else {
       end--
     }
    }
}



let target = 7

console.log("hehe",twoSum(arr, target))