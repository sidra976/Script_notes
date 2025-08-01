    function createCounter(n, s){
        
      function counter(){
        let current = n
        n= n + s;
        return current
      }
      return counter
   }
   

const counter = createCounter(5, 2);

console.log(counter()); // 5
console.log(counter()); // 7
console.log(counter()); // 9
console.log(counter()); // 11


