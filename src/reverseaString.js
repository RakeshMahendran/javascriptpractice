function reverseString(str){
  var reversed = ''
    for (let i =str.length-1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}

var str = "HelloWorld!,"


console.log("reversed",reverseString(str))