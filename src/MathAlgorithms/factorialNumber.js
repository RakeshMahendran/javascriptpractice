function fac(n){
 let fib = 1
for ( let i = 2; i <= n; i++ ){
   fib = fib * i
}
return fib
}

console.log(fac(5))