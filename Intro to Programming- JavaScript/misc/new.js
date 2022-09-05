let a = BigInt(1);
let b = BigInt(1);

// i is our index, it starts at 2 because we've already set a and b to initial values
let i = 2;

// loop until we hit a 1000-digit number
while (b.toString().length < 1000) {
  let oldB = b; // store b to a temp variable
  b = a+b; // increment b
  a = oldB; // set a to the old b
  i++; // bump the index
  console.log(i, b.toString().length); // log out our index alongside the length of the fibonacci number
}