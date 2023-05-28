// When a varible declared in a global scope is overshadowed by the variable declared in a block scope, it is called as variabe overshadowing

var a = 5
function hmm (){
   a = 2
   console.log(a)
}

hmm()

console.log("a2",a)