const balance = 100.233000;

//toFixed
console.log(balance.toFixed(2));

//toPrecision means saying 'Give me this number with only 2 or x digits of info'
console.log(balance.toPrecision(2));

//localeString
const amount = 1000000;
console.log(amount.toLocaleString());

//Math Object
console.log(Math.E);
console.log(Math.PI);

//Rounding
console.log(Math.round(4.3));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.3));
console.log(Math.trunc(4.3));

//Min and Max
console.log(Math.min(3,4,5,6,2));
console.log(Math.max(3,4,5,6,2));

//Random
console.log(Math.random()); //Value between 0 and 1
console.log((Math.random() * 10) + 1); //Value between 1 and 10

//Random range
const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.random() * (max - min)) //Value between 0 and 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Value between 10 and 20
