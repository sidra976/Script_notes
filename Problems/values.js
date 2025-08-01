let expect = function(val) {
    function toBe(otherValue){
       if(val === otherValue){
          return true
       }
       throw new Error("Not Equal");
       
    }
    function notToBe(otherValue){
       if(val !== otherValue){
          return true
       }
       throw new Error("Equal");
    }
    return {
  toBe,
  notToBe
};

};

let result = expect(5);
console.log(result.toBe(5));      // ✅ true
console.log(result.notToBe(10));  // ✅ true
console.log(result.toBe(10));     // ❌ throws Error: "Not Equal"

