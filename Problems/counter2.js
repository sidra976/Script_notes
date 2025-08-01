var createCounter = function(init) {
    let current = init;
    let obj = {
        increment: function(){
            return ++current;
        },
        decrement: function(){
            return --current;
        },
        reset: function(){
            current = init;
            return current;
        }
    };
    return obj;
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());



