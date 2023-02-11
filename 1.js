let n = 5 ;
let string = "";
for (let a = 1; a <= n; a++) {
  for (let b = 0; b < a; b++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);