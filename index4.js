// FizzBuzz
// Create a JavaScript code that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


//Declare i to incremenent from 1 up to 100.
for (let i = 1; i <= 100; i++){

//Both multiples of 3 and 5 will print FizzBuzz in the console.  
   if (i % 3 === 0 && i % 5 === 0){
console.log("FizzBuzz") 
//Multiples of 3 will print Fizz in the console.
}  else if ( i % 3 === 0){
    console.log('Fizz')
//Multiples of 5 will print Buzz in the console.
}  else if ( i % 5 === 0){
    console.log("Buzz")
// Remaining numbers will print on console.
}  else console.log(i)
}
