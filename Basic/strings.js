const city = new String('Canada');

//String Slicing
//Method 1
const str = city.substring(0,2);
console.log(str);

//Method 2 where we can give negative index
const str2 = city.slice(-5, 3); 
console.log(str2);

//Trim Method
const str3 = '         Hello World         ';
console.log(str3.trim());

//Replace
const url = 'https://google.com';
const newUrl = url.replace('https', 'http');
console.log(newUrl);

//Includes (to check if a string exists in a string)
const str4 = 'Hello World';
console.log(str4.includes('World'));

//Repeat
const str5 = 'Hello';
console.log(str5.repeat(5));

//Split
const str6 = '12-12-2021';
console.log(str6.split('-'));

let name = 'Frank'
console.log(name.split(''));

//Split with limit
let line = "one two three four";
let parts = line.split(" ", 2);

console.log(parts); 