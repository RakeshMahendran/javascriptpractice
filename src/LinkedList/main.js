function check(str1, str2) {
  let m = str1.length;
  let n = str2.length;

  console.log("m:", m, "n:", n);

  function gct(x, y) {
    console.log("!y", !y);
    if (!y) {
      return x;
    }
    console.log("x:", x, "y:", y, "x%y", x % y);
    return gct(y, x % y);
  }

  let div = gct(m, n);
  return str1.substring(0, div);
}

check("ABCABC", "ABC");
