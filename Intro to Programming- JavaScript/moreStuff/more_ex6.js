let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}
console.log(allMatches(words, /lab/));