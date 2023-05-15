function recursiveFactorial(N){
    if(N < 2){
        return 1
    }
    return N * recursiveFactorial(N - 1)
}

console.log(recursiveFactorial(3))