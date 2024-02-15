// Creating array
let colors=['blue','red','green'];
let numbers=[4,6,7,8];
//Display each element in array
for(let i=0;i<colors.length;i++) {
    console.log(colors[i]);
}
//Double values of each array element
let doubledNumber=numbers.map(num=>num*2);
console.log(doubledNumber);
//filtering even numbers from array
let oddNumbers=numbers.filter(num=>num%2!==0);
console.log(oddNumbers);
// Summing all numbers elements
let sum= numbers.reduce((acc,num)=>acc+num);
console.log(sum);
//Checking if every array elements are greater than zero
let isPostive=numbers.every(num=>num>0);
console.log(isPostive);
