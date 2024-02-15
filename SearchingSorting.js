// Creating array
let colors=['blue','red','green'];
let numbers=[4,6,7,8];
//finding index of array element
let redIndex=colors.indexOf('red');
console.log(redIndex);
//sorting array numbers in ascending order
let sortedNumbers= numbers.sort((a,b)=>a-b);
console.log(sortedNumbers)
//sorting array numbers in descending order
let descendingNumbers= numbers.sort((a,b)=>b-a);
console.log(descendingNumbers);
//Reversing array elements
let reversed=colors.reverse();
console.log(reversed);
//return three first element in array
let threeFirst=numbers.slice(0,3);
console.log(threeFirst);
//concatenating two arrays
let carray= numbers.concat(colors);
console.log(carray);
