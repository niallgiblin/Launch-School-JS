let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); //prints bar, the foo inside the block doesn't have scope outside  block