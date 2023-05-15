let arr = [5, 62, 45, 42, 34];
function linearSearch(arr, n) {
 for(let i= 0;i<arr.length;i++) {
    if(arr[i]==n) {
        return i;
    }
 }
 return "Not found"
}

console.log(linearSearch(arr, 34));

function linearSearch2(arr,target){
    let i = 0
    while( i< arr.length){
        if(arr[i]==target) {
            return i;
        }
        i++
    }
    return "Not Dound"
}


console.log("hi",linearSearch2(arr, 34));
