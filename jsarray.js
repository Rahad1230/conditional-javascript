/*
 * File: jsarray.js
 * Created: Tuesday, 2nd September 2025 8:57:10 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Tuesday, 2nd September 2025 9:28:18 am
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
/* 1.Declare An Array */
let fruits = ["Mango", 'Banana', 'Lichi', 'Orange', 'Apple'];
console.log(fruits);
console.log(fruits[2]);
fruits[1] = 'Jambura';
console.log(fruits);
/* 2.Add or remove element */
let spot = ['Coxs Bazar', 'Bandarban', 'Sajek'];
spot.push('Rangamati');
spot.push('sylhet', 'Jaflong');
console.log(spot);
spot.pop();
console.log(spot);
/* 3.checking Array Member */
let books = ['Bangla', 'English', 'Math', 'History', 'Biology', 'chemistry'];
if(books.includes("Math")){
    console.log("The Math Book is Here");
} else {
    console.log("The Boook is not here");
}
/* 4.Checking array or Not */
let x = [2, 4, 5, 6, 8, 9];
const y = 5;
let z = 'Me';
console.log(Array.isArray(x) + " X is Array");
console.log(Array.isArray(y) + " Y is Array");
console.log(Array.isArray(z) + " z is Array");
/* 5.Combining Array */
let p = [1, 2, 5, 6, 8, 9, 25];
let q = ["Rifat", 'mehedi', 'rahim', 'borkot', 'mamun'];
console.log(p.concat(q));