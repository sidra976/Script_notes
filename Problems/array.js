var f = function(arr) {
    let val = arr
    return function(){
        for(let i of val){
            return i
        }
    }
};

let a = f([1,2,3])
console.log(a());
console.log(a());
console.log(a());

