'use strict';

const { fullName } = require("./challenges-11");

// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//  
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output:
// [89, 41, 31, 111, 31]
// 

const oddFiltration = (arr) => {
    // write your code here
    let oddArr = arr.filter((element) => {
        if (element % 2 !== 0) {
            return true;
        }
    })
    return oddArr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// optional:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvsFiltration = (arr) => {
    // write your code here
    let newArr = arr.filter((element) => {
        if (element.yearsOfExperience > 4 && element.tech === "JS") {
            return true;
        }
    })
    let resultArr = newArr.map((element1) => {
        if (element1.firstName == null && element1.LastName != null) {
            let fullname = element1.LastName
            return {
                fullName: fullname,
                tech: "JS"
            }
        }
        else if (element1.firstName != null && element1.LastName == null) {
            let fullname = element1.firstName
            return {
                fullName: fullname,
                tech: "JS"
            }
        }
        else if (element1.firstName != null && element1.LastName != null) {
            let fullname = element1.firstName + " " + element1.LastName
            return {
                fullName: fullname,
                tech: "JS"
            }
        }
    })
    return resultArr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// optional:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

const vowelsFiltration = (arr) => {
    // write your code here
    let newArr = arr.filter((element2) => {
      console.log(element2)
      
      let result = /[aieuo]+/.test(element2)
       return !result;
       
    })
    return newArr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// Input:
// first_Employee = [C, C#, Java, Angular, PHP]
// sec_Employee = [C#, .Net, JavaScript, React, Angular]

// Output:
// result = [C, Java, PHP, .Net, JavaScript, React]

// Hint:
// - the 'include' method can help you, read about it.

const skillComparison = (arr1, arr2) => {
    // write your code here
  let resultArr = [];
  let newArr1 = arr1.filter((element)=>{
     if(arr2.includes(element)){
            return false;
        }else{return true;}
  })
  newArr1.forEach((element1)=>{
    resultArr.push(element1);
  })

let newArr2 = arr2.filter((element)=>{
     if(arr1.includes(element)){
            return false;
        }else{return true;}
  })

  newArr2.forEach((element2)=>{
    resultArr.push(element2);
  })
  return resultArr;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

