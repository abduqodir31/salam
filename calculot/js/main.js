let a = +prompt("son1");
let b = prompt("amal kiriting");
let c = +prompt("son2");
let result = 0;

function x(a, b, c) {
  if (b == "+") {
    return (result += a + c);
  }
  if (b == "-") {
    return (result += a - c);
  }
  if (b == "*") {
    return (result += a * c);
  }
  if (b == "/") {
    return (result += a / c);
  }
}
x(a, b, c);
console.log(result);

let i = alert(result);