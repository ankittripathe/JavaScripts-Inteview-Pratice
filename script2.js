// Loops
// (11) Loops an array and add all members of it 
// in an array of numbers and strings,
// only add those members which are not strings.

let array = [1, 2, 3, 4, 5]
let sum = 0;

array.forEach((elem)=>{
    sum = sum + elem;
})
console.log(sum);


// for(let i = 0; i<array.length; i++){
//     sum = sum + array[i]
// }
// console.log(sum);
