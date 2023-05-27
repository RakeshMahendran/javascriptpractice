function insertSort(arr){
  for(let i =0 ; i<arr.length ; i++){
   let j = i - 1
   let numberToinsert = arr[i]
   while( j >=0 && arr[j]> numberToinsert ){
    arr[j+1] = arr[j]
    j = j -1
   }
   arr[j+1] = numberToinsert
  }
}

const arr = [-4,5,-6,8,3]

insertSort(arr)
console.log(arr)


