function insertin(arr){
  for(let i =0 ; i < arr.length ; i++){
     insertElement = arr[i]
     j = i - 1
     while( j >=0 && arr[j] > insertElement){
        console.log("[arrj]:",arr[j])
        arr[j + 1] = arr[j]

     }
     console.log("arr[j+1]", arr[j + 1], "insertElement", insertElement);
     arr[j+1] = insertElement
}
}
arr = [4, -2, 6, -4, 7];
insertin();
console.log(arr);