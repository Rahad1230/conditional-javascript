42
/*
 * File: js-loop-break.js
 * Created: Tuesday, 2nd September 2025 8:23:49 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Tuesday, 2nd September 2025 8:53:39 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
/*1 century */
/*
for (let i = 1; i <= 200; i++){
    if (i === 100) {
        break;
    }
    console.log(i);
}
*/
/*2 Sum upto 100  */
/*
let i = 1;
sum = 0;

while (sum < 100) {
    sum += i;
    if (sum >= 100) {
        break;
    }
    i++;
}
console.log("The number is: " + i);
*/
/* 3 Square Or Not */

for (let i = 2; i <= 100; i++) {
  // check if i is a perfect square
    if (Number.isInteger(Math.sqrt(i))) {
    console.log("First square number found:", i);
    break; // stop loop when a square number is found
    }
    console.log(i);
}
//next is for ,while and continue which is doing in c language