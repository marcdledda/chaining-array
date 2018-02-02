console.log("JS TEST");

const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];
console.log(integers);

let newIntegers = integers.sort(function(a,b){return(b-a)}).filter(function(a){return(a > 19)}).map(function(a){return(a*1.5-1)}).reduce(function(a,b){return(a + b)});

console.log("NEW:");
console.log(newIntegers);