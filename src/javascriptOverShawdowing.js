// When a varible declared in a global scope is overshadowed by the variable declared in a block scope, it is called as variabe overshadowing
function hi(){
    let a = 5;
    function hmm() {
      var a = 2;
      console.log(a);
    }
    hmm()
    console.log("a2", a);
}

hi()