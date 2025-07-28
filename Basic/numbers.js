const balance = 100.233000;

//toFixed
console.log(balance.toFixed(2));

//toPrecision means saying 'Give me this number with only 2 or x digits of info'
console.log(balance.toPrecision(2));

//localeString
const amount = 1000000;
console.log(amount.toLocaleString('en-PK'));