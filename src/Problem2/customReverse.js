function customMerge (arr) {
    if(arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    return merge(customMerge(left), customMerge(right))
}

function merge (left,right) {
    const sorted = []
    while(left.length && right.length) {
        if(left[0] <= right[0]){
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]

}

const arr = [4,10,6,-10,5]
console.log("mergesort",customMerge(arr))