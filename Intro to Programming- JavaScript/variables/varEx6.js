const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); //this logs bar without an error. The const within the block is only within the scope of the block