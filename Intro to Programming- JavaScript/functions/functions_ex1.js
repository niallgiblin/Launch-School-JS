let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); //logs 1, calling foo doesn't change the first bar because the second bar is only within the scope of the function