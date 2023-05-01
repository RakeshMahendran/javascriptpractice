function isPower(n){
    if( n < 1){
        return false
    }
    while(n>2){
      if(n%2 !== 0 ){
        return false
      }
      n = n/2
    }
    return true
}

console.log(isPower(5))


function powerTwo(n) {
  if(n < 2){
    return false
  }
   
  while (n > 2){
    if(n%2 !== 0){
      return false
    }
    n = n/2
  }
    return true;
}


function PowerOf(n){
  if(n<2){
    return false
  }
  while(n<2){
    if(n%2 !== 0){
      return false
  }
  return true
}

console.log(PowerOf(2))