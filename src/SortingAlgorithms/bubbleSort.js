

function bubbleSort(arr){
    
    for (let  i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < arr.length - i - 1 ; j++){
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
        }
      
    }
    return arr
}
arr = [-3,-6,4,8,-9]
bubbleSort(arr)
console.log("bubbleSort",arr)


function bubbleUsingDoWhile(arr){
    let swapped
    do{
    swapped = false;
    for(let a = 0; a <  arr.length - 1; a++){
        if(arr[a]> arr[a-1]) {
            let temp = arr[a];
            arr[a] = arr[a-1];
            arr[a-1] = temp;
            swapped = true;
           
        }
    }}
     
    
    while(swapped)
    console.log("swapped", swapped);
    return arr
}

arr = [2,-3,5,-4,1,6]

bubbleSort(arr)
console.log("raja",arr)
