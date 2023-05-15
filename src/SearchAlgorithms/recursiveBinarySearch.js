function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1);
}0

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex) {
        return -1;
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)

    if(arr[middleIndex] === target) {
        return middleIndex
    }

    if(arr[middleIndex]> target){
        return search(arr,target,leftIndex,middleIndex -1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

console.log("recursiveBinarySearch",recursiveBinarySearch([1,2,3,4,60,70,80,90],100))
