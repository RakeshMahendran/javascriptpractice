function isPrime(n){
   if(n<2){
    return false;
   }
   if(n === 2) {
    return true
   }
   if(n%2 === 0){
    return false
   }
   for(let i = 3; i <= n; i++){
    if( n%i === 0){
      return false
    }
   }

   return true
}

console.log("isPrime",isPrime(3));

function isPrime(num) {
  // Check if the number is less than 2 or not an integer
  if (num < 2 || !Number.isInteger(num)) {
    return false;
  }
  
  // Check if the number is 2 (the only even prime number)
  if (num === 2) {
    return true;
  }
  
  // Check if the number is divisible by 2
  if (num % 2 === 0) {
    return false;
  }
  
  // Check if the number is divisible by any odd number up to the square root of the number
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  // If the number is not divisible by any other number, then it is prime
  return true;
}

// Example usage:
console.log(isPrime(3)); // Output: true
console.log(isPrime(12)); // Output: false
