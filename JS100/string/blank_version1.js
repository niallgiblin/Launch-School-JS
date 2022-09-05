isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

function isBlank(string) {
  return string.length === 0;
}

console.log(isBlank('mars'))
console.log(isBlank(''))