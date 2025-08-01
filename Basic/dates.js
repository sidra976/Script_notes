let createDate = new Date(2025, 6, 28);
console.log(createDate.toDateString());
console.log(createDate.getFullYear());
console.log(createDate.getMonth());
console.log(createDate.getDate());
console.log(createDate.getDay());

const newData =  new Date(2025, 6, 28); //yyyy-mm-dd
console.log(newData.toLocaleString());

//Timestamp
const now = Date.now(); 
const pastDate = new Date("2024-01-01");
const pastTime = pastDate.getTime();

const diff = now - pastTime;

const seconds = Math.floor(diff / 1000);
const minutes = Math.floor(diff / (1000 * 60));
const hours = Math.floor(diff / (1000 * 60 * 60));
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log("Seconds:", seconds);
console.log("Minutes:", minutes);
console.log("Hours:", hours);
console.log("Days:", days);


//customize format
const date = new Date();
const dd = date.toLocaleString('default', {
    weekday: 'long',
    year: '2-digit',
    month: 'long',
    day: 'numeric'
})

console.log(dd);