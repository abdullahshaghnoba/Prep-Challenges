'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let midWord = '';
    let strArr = str.split(" ");
    if (strArr.length % 2 != 0) {
        midWord = strArr[strArr.length / 2 - 0.5];
        return midWord.length;
    } else {

        return 1;
    }
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    return str1.length === str2.length && str1.split("").sort().join() == str2.split("").sort().join() ? true : false;
}




// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let indexIfNotExist = [];
    if (arr.includes(int)) {
        let intIndex = arr.indexOf(int)
        return intIndex;
    } else if (int < arr[arr.length - 1]) {
        arr.forEach((element, index) => {
            if (int > element && int < arr[index + 1]) {
                indexIfNotExist.push(index + 1);
            }
        })
        return indexIfNotExist[0];
    } else { return arr.length }
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };