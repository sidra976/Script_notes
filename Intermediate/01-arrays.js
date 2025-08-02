//Array Methods

const letters = ['A', 'B', 'C', 'D', 'E'];

//Push
letters.push('F');
console.log('Push' , letters);

//Pop
letters.pop();
console.log('Pop' , letters);

//Shift
letters.shift(); //Removes the first element
console.log('Shift' , letters);

//Unshift
letters.unshift('A'); //Adds the first element
console.log('Unshift' , letters);

//Includes
console.log(letters.includes('A')); //Returns true or false

//Indexof
console.log(letters.indexOf('A')); //Returns the index of the element

//Join
console.log(letters.join(' ')); //Returns the array as a string

//Slice
console.log(letters.slice(1, 3)); //Return the range of the array doesn't change the original
console.log('Slice' , letters);

//Splice
console.log(letters.splice(1, 3)); //Removes the range of the array changes the original
console.log('Splice' , letters);

