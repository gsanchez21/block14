// Create a JavaScript code that accepts a string of lowercase letters. 
// Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.

// Hint: Define two variables that keep track of the number of consonants and vowels.

// Input Strings	Expected Results
// "hello"	        "hello has 3 consonants and 2 vowels"
// "ukelele"	    "ukelele has 3 consonants and 4 vowels"
// "awesome"	    "awesome has 3 consonants and 4 vowels"
// "onomonopia"	"onomonopia has 4 consonants and 6 vowels"
// "textbook"	    "textbook has 5 consonants and 3 vowels"

//Create loop with if statement to check if each string letter is equal to a vowel.
//Else statement will be for reamining string letters that are consonants.
let string = 'hello'
const vowels = ['a','e','i','o','u']
let vowelsCount = 0
let consonantsCount = 0

 for (let i = 0; i < string.length; i++){
    //Each string value will be compared to each vowel index. If condition met vowelCounter will increment and loop until the end of string.
    if (string[i] === vowels[0] || string[i] === vowels[1] || string[i] === vowels[2] || string[i] === vowels[3] || string[i] === vowels[4]) {
        vowelsCount++
    //Each string value not equal to vowels index, consonansCount will increment.
     } else consonantsCount++
} console.log(string , 'has', consonantsCount, 'consonants', 'and', vowelsCount, 'vowels');

//Assigned new string
string = 'ukelele'
//Reset Counters
vowelsCount = 0
consonantsCount = 0

for (let i = 0; i < string.length; i++){
    if (string[i] === vowels[0] || string[i] === vowels[1] ||  string[i] === vowels[2] || string[i] === vowels[3] || string[i] === vowels[4]) {
        vowelsCount++
    
     } else consonantsCount++
} console.log(string , 'has', consonantsCount, 'consonants and', vowelsCount, 'vowels')

string = 'awesome'
vowelsCount = 0
consonantsCount = 0

for (let i = 0; i < string.length; i++){
    if (string[i] === vowels[0] || string[i] === vowels[1] ||  string[i] === vowels[2] || string[i] === vowels[3] || string[i] === vowels[4]) {
        vowelsCount++
    
     } else consonantsCount++
} console.log(string , 'has', consonantsCount, 'consonants and', vowelsCount, 'vowels')

string = 'onomonopia'
vowelsCount = 0
consonantsCount = 0

for (let i = 0; i < string.length; i++){
    if (string[i] === vowels[0] || string[i] === vowels[1] ||  string[i] === vowels[2] || string[i] === vowels[3] || string[i] === vowels[4]) {
        vowelsCount++
    
     } else consonantsCount++
} console.log(string , 'has', consonantsCount, 'consonants and', vowelsCount, 'vowels')

string = 'textbook'
vowelsCount = 0
consonantsCount = 0

for (let i = 0; i < string.length; i++){
    if (string[i] === vowels[0] || string[i] === vowels[1] ||  string[i] === vowels[2] || string[i] === vowels[3] || string[i] === vowels[4]) {
        vowelsCount++
    
     } else consonantsCount++
} console.log(string , 'has', consonantsCount, 'consonants and', vowelsCount, 'vowels')
