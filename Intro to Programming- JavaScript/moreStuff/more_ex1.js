let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); //logs [1, 4, 3], line three changes the value in array1 which array2 also references