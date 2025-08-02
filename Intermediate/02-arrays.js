//Concat
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = arr1.concat(arr2);
console.log(arr3);

 //Spread Operator it is used to merge two or more arrays
let arr4 = ['a', 'b', 'c', 'd', 'e'];
let arr5 = ['f', 'g', 'h', 'i', 'j'];
let arr6 = [...arr4, ...arr5];
console.log(arr6);

//flat operator it is used to flatten an array
let arr7 = [[1,2,3], [4,5,6,[3,5]], [7,8,9]];
let arr8 = arr7.flat(Infinity);
console.log(arr8);

//isArray
console.log(Array.isArray(arr8));

//Array.from
let str = 'Hello World';
let arr9 = Array.from(str);
console.log(arr9);

//Array.of
let arr10 = Array.of(1,2,3,4,5);
console.log(arr10);
