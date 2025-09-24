/* 
(1) Give a string, reverse each word in the sentence. 
"Harsh bhai kaise ho"
*/
let str = "Hello ji kaise ho"
let reverseStr = ''

for(let i = str.length-1; i>=0; i--){
    reverseStr = reverseStr + str[i]
}
console.log(reverseStr);   // output: oh esiak ij olleH


// Method 2nd => map return new array
let myStr = 'Ankit kaise ho'
let savedStr = myStr.split(" ").map((word)=> {
    return word.split("").reverse().join("")
})
console.log(savedStr.join(" "));


// (2) How to check if an object is array or not ? Provide some code.
function checkArray(elem){
    return Array.isArray(elem)
}
console.log(checkArray([]));  // output: true
console.log(checkArray({}));  // output: false

/*
Notes: retrun ka matlab hota hai oha pe wapas jawo jaha ke wajah se function chala hai.
*/

// (3) How to empty an array in javaScripts ? do not reset it to a new array, and do not loop through to pop each value
// method-1
let cities = ['delhi', 'noida', 'gudgaon', 'jaipur']
console.log(cities.length);  // 4

cities.length = 0
console.log('cities =', cities);

// method-2
let array = [1, 2, 3, 4, 5]
for(let  i = array.length-1; i>=0; i-- ){
    array.pop()
    console.log(array); 
}
console.log('finalArray =', array);


// (4) How to check if a number is an integer ?
/*
Integers value => zero, positive, negative
float value => fractional value, decimal value
*/
const checkNumber = (num)=>{
    return Number.isInteger(num)
}
console.log(checkNumber(3));   // true
console.log(checkNumber(0));   // true
console.log(checkNumber(-11)); // true
console.log(checkNumber(3.2)); // false
console.log(checkNumber(1/2)); // false


// Method-2
var num = 12;
if(num%1 === 0){
  console.log('integer');
} else{
  console.log('not a integer');
}

/* (5) Make this work:
   duplicate this ([1, 2, 3, 4, 5]), that will gives output [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
*/

// Method-1
function duplicate(arr){
    console.log(arr.concat(arr));
}
duplicate([1, 2, 3, 4, 5])

// Method-2
let fruits = ['apple', 'banana', 'grapes', 'leechi']
let answer = fruits.concat(fruits)
console.log(answer);


// Functions 
// (6) Write a javaScript function that reverse a number
function reverseKaro(num){
    let str = num.toString()
    let arrayStr = str.split('')
    let reverseStr = arrayStr.reverse()
    let  finalReverse = reverseStr.join("")
    console.log(typeof finalReverse);
    
    let finalReverseInNumber = Number(finalReverse)
    console.log(finalReverseInNumber);
    console.log(typeof finalReverseInNumber);
}
reverseKaro(12)
// reverseKaro("72")

