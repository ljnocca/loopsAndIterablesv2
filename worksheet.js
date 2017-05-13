/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

 function sumOfArray(array){
 	var summation = 0
 	for (var i = 0; i<array.length; i++){
 		summation += array[i] 
 	}
 	return summation
 }

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.
function maxOfArray(array){
	if(array.length===0){
		return null
	}
	else{
		array.sort(function(a,b){return b-a}) //sort from greatest to smallest
    	return array[0] //return first number in sorted array
	}
}

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

function isVowel(character){
    if(typeof(character)==='number'){
        return false
    }
	else if ((character==='a')||(character==='o')||(character==='i')||(character==='e')||(character==='u')||(character==='y')||(character==='A')||(character==='O')||(character==='I')||(character==='E')||(character==='U')||(character==='Y')){
		return true
	}
	else{
		return false
	}
}

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(string){
    var stringArray = string.split('') //split word into array of letters
    stringArray.reverse() //reverse those letters
    var outputString = stringArray.join('') //join those letters back together
    return outputString
}

/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */

function fizzbuzz(number){
    var string = ""
    for (var i=1; i<=number ;i++){
        if((i%3!==0)&&(i%5!==0)){
            string += '.'
        }
        else if((i%3===0)&&(i%5!==0)){
            string += 'fizz'
        }
        else if((i%3!==0)&&(i%5===0)){
            string += 'buzz'
        }
        else if((i%3===0)&&(i%5===0)){
            string += 'fizzbuzz'
        }
    }
    return string
}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
function findLongestWord(string){
    var justLetters = string.replace(/[^A-Za-z\s]/, "") //regex replaces everything except A-Z and a-z
    var stringArray = justLetters.split(' ') //split into array of words
    var sortedArray = stringArray.sort(function(a,b){return b.length-a.length}) //sort from largest to smallest
    return sortedArray[0]
}


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

 var GCD = function(num1, num2) {
    for (var i = num1; i > 0; i--) {            // begin iterating backwards from an input number
        if (num1 % i === 0 && num2 % i === 0) { // as soon as both input numbers are divisible by i,
            return i                            // return i
        }
    }
    return 1                                    // otherwise, return 1
}

