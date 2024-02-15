//creating array 
let fruits=['apple','bananas'];
//converting 'Hello World' to array of string
let hello ='Hello World'.split("");
console.log(hello);
//reversing array
let reversed= hello.reverse();
console.log(reversed);
//converting reversed array back to string
let reversedString= hello.join("");
console.log(reversedString);
//replacing all 'apple' occurance with 'orange'
let newfruits=fruits.map(fruits=>fruits==='apple'?'orange':fruits);
console.log(newfruits);


