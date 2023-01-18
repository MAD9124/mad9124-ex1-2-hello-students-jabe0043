'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1


//Import and parse JSON file
const students = require('./students.json');


//Iterate through student array
students.forEach((student) => console.log(`Hello ${student['firstName']} ${student['lastName']}`));

//Number of last names starting with the letter D
function countTheD(){
    let arrD=[];
    students.forEach((student) =>{
        if (student['lastName'].startsWith('D')){
            arrD.push(1);
        }
    })
    let sum = arrD.reduce((a,b)=> a + b, 0);
    console.log(`Count of last names starting with D is ${sum}`);
}
countTheD();