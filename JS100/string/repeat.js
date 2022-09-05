function repeat (number, word) {
  let repetitions = ''
  while (number > 0) {
    repetitions += word
    number -= 1
  }
  return repetitions
}
console.log(repeat(3, 'ha'))