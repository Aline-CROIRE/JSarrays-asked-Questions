//creating arrays
let numbers=[1,2,5,6,7,1,2,3];
let mixed=[1,'two',3,'four'];
//removing duplicates in an array
let removed= [...new Set(numbers)];
console.log(removed);
//converting mixed array into array of string
let stringArray=mixed.join();
console.log(stringArray);
//check if every element of array has same datatype
let check=mixed.every((el, _, arr) =>typeof el ===typeof arr[0]);
console.log(check);
//to find maximum number
let maximum=Math.max(...numbers);
console.log(maximum);

