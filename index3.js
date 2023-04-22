// With a for loop, create a JavaScript code that creates a new array in reverse order.

// Input Arrays	       Expected Results
// [1, 2, 3]	                [3, 2, 1]
// [1, 3, 5, 7, 9, 11]	        [11, 9, 7, 5, 3, 1]
// [20, 50, 30, 60, 200]       [200, 60, 30, 50, 20]
// [1, -1, 2, -3, 5, -8, 13]	[13, -8, 5, -3, 2, -1, 1]

// Assigned Array
const array1 = [1, 2, 3]
// New Array
const reversedArray1 = []

// For statement, set our condition.
for(let i = array1.length - 1; i >= 0; i--) {
//Declared array index as a variable  
    const indexValue = array1[i]
//Sends last value of the array to the end of the new reversed array
  reversedArray1[reversedArray1.length] = indexValue
//Prints reversed array in the console
}console.log(reversedArray1)

const array2 = [1, 3, 5, 7, 9, 11]
const reversedArray2 = []

for(let i = array2.length - 1; i >= 0; i--) {
  
  const indexValue = array2[i]
  reversedArray2[reversedArray2.length] = indexValue
  
}console.log(reversedArray2)

const array3 = [20, 50, 30, 60, 200]
const reversedArray3 = []

for(let i = array3.length - 1; i >= 0; i--) {
  
    const indexValue = array3[i]
    reversedArray3[reversedArray3.length] = indexValue

}console.log(reversedArray3)

const array4 = [1, -1, 2, -3, 5, -8, 13]
const reversedArray4 = []

for(let i = array4.length - 1; i >= 0; i--) {
  
  const indexValue = array4[i]
  reversedArray4[reversedArray4.length] = indexValue

}console.log(reversedArray4)
