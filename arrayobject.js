//creating object
let userObject={id:1,name:'john',age:24};
let student={id:23,name:'anny',grade:'b'};
//converting object into arra of key-value pairs
let userarray=Object.entries(userObject);
console.log(userarray);
//creating object from array
let createdObject=Object.fromEntries(userarray);
console.log(createdObject); 
// merging objects
let merged={...userObject,...student};
console.log(merged);
//finding common key between object
let commonkey=Object.keys(userObject).filter(key=>student.hasOwnProperty(key));
console.log(commonkey);
//create array of values from common keys
let commonvalues= commonkey.map(key=>Object(key));
console.log(commonvalues);
