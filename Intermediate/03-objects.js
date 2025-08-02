let user = {
    name : "Sara",
    age : "25",
    country : "Egypt",
    greetings: function(){
        console.log(`Hello ${this.name}`);
    },
}

user.greetings();
console.log(user['name']);
Object.freeze(user);
user.country = "USA";
console.log(user.country);
console.log(user);

