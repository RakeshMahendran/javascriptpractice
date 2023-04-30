function fibonacci (n){
   const fib = [0,1]
    for (let i=2; i<n; i++){
     fib[i] = fib[i-1] + fib [i-2]
    }
    return fib
}

console.log(fibonacci(20)) //[0,1,1,2,3,5,8]


function fibo(n){
   
    const fibi = [0,1]
    for(let i=2; i<n; i++){
        fibi[i] = fibi[i-1] + fibi[i-2]
    }

    return fibi[fibi.length -1]
}

console.log(fibo(5))