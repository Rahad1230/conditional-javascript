/*
 * File: js-string-task.js
 * Created: Thursday, 4th September 2025 11:07:47 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Thursday, 4th September 2025 12:07:04 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
/* Task 1  and 2*/
const str = "Hello Dear, I am Rahad .How are you .how can I help you?are you happy?NOW GO AND SLEEP.BEST OF LUCK.HAPPY JOURNEY.THANK YOU";
let count = 0;
for (let a of str) {
    if (a === 'a' || a=='A') {
        count++;
    }
}
console.log(count);
let str1 = "HI This is rahad how are you how can you go for cyber security appproaches.XSS attack is very common in our website .USA had a strong economy Zone .xxmmllets finished it";
function vowelall(str) {
    if (!str.includes('a')) return false;
    if (!str.includes('e')) return false;
    if (!str.includes('i')) return false;
    if (!str.includes('o')) return false;
    if (!str.includes('u')) return false;

    return true;
}
console.log(vowelall(str1))

function replace(str) {
    if (str.includes('x')) {
    str = str.split('x').join('y'); // replace all lowercase x
}
    if (str.includes('X')) {
    str = str.split('X').join('Y'); // replace all uppercase X
}
return str;
}
console.log(replace(str1));
function wordcapital(st1) {
    const str3 = st1.trim();
console.log(str3);
const words = str3.split(" ");
console.log(words);
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
}
const capitalizedStr = words.join(" ");
console.log(capitalizedStr);
}
wordcapital("           neaew   nppw how df nm.      ");

