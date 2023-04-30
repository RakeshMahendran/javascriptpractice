function fac(n){
 let fib = 1
for ( let i = 2; i <= n; i++ ){
   fib = fib * i
}
return fib
}

//console.log(fac(5))


function factoo(n){
  let result = 1 
  for ( let i = 2; i <= n; i++ ){
   result = result * i
  }
  return result
}

console.log("factoo(5)", factoo(5));