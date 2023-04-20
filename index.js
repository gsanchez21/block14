// //Only Odds
// Create a JavaScript code that modifies a copy of an array of numbers and 
//returns a new array with only the odd numbers from the original array. 
//If there is only one odd number in the array, return an array with that single value.

// Input Arrays	                 Expected Results
// [2, 4, 6, 8, 11, 20, 15, 22]	     [ 11, 15]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	 [1, 3, 5, 7, 9]
// [70, 42, 55, 81, 21, 91, 34]	     [55, 81, 21, 91]
// [2, 4, 6, 8, 10, 11, 12] 	     [11]

//Declaring values in array. 
let inputArray = [2,4,6,8,11,20,15,22]
 
console.log("New Array")
for (let i = 0; i < inputArray.length; i++) {
   //Loops each value in the array to find the remainder, if equal to 1. The value is odd.  
  if (inputArray[i] % 2 === 1){
    //Prints odd values on the console.
    console.log('[',inputArray[i],']')
   } 
} 
 
inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("New Array")
for (let i = 0; i < inputArray.length; i++) {
    
    if (inputArray[i] % 2 === 1){
      console.log('[',inputArray[i],']')
     } 
  } 

inputArray = [70, 42, 55, 81, 21, 91, 34]	

console.log("New Array")
for (let i = 0; i < inputArray.length; i++) {
    
    if (inputArray[i] % 2 === 1){
      console.log('[',inputArray[i],']')
     } 
  } 

inputArray = [2, 4, 6, 8, 10, 11, 12]

console.log("New Array")
for (let i = 0; i < inputArray.length; i++) {
    
    if (inputArray[i] % 2 === 1){
      console.log('[',inputArray[i],']')
     } 
  } 





// const sentence = "There once was a donkey named Eeyore."
// let counter = 0;

// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] === "e") {
//     counter++
//   }
// }

// console.log(counter)