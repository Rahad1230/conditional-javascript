/*
 * File: practice_problem1.js
 * Created: Saturday, 13th September 2025 8:47:18 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Saturday, 13th September 2025 9:44:55 am
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
//task1: Celcius to farenheit using function
function tofarenheit(celcius) {
    let x = (celcius * 9 / 5) + 32;
    return x;
};
console.log(tofarenheit(81) + " Degree Farenheit");
//Task2: Number count in a array
function inarray(arr, x) {
    let count = 0;
    for(let p of arr) {
        if (p === x) {
            count++;
        }
    }
    return console.log(count);
};
w = [5, 6, 11, 12, 98,96,6,5,2, 5];
z = inarray(w, 5);

//Task3:Count vowel in a string
/*
function vowelstring(string) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let ch of string) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    console.log("Number of vowel is: ", count);
};
str = "My name is rahad how are you whats going on Here."
vowelstring(str);
*/
function vowelstr(str) {
    let count = 0;
    let lower = str.toLowerCase();
    for (let ch of lower) {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }
    return console.log("Vowel in this string " ,count)
};
str = "     My name is rahad how are you whats going on Here."
vowelstr(str);
//task 4: Longest word in a string
function longword(str1) {
    let str2 = str1.trim();
    let str3 = str2.split(" ");
    let longest = str3[0];
    for (let word of str3) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    console.log("The longest word is ", longest, ".The length is: ", longest.length);
};
str1=" I am learning Programming to become a programmer."
longword(str1);
//Task 5: Generate a random number between  10 to 20
let num = Math.round((Math.random()*10)+10);
console.log(num);
let num1= Math.floor(Math.random() * 11) + 10;
console.log(num1);
//Problem set one done lets go to the next


