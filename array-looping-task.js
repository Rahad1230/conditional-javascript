/*
 * File: array-looping-task.js
 * Created: Thursday, 4th September 2025 7:36:58 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Thursday, 4th September 2025 8:11:29 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
/* Task 1 */
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let fruits = [];
for (let x = colors.length-1; x >= 0; x--){
    fruits.push(colors[x]);

}
console.log(fruits);
/* Task 2 */
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evens=[]
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i])
    }
}
console.log(evens);
/* Task 3 */
var members = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = "";

for (let nam of members) {
    result += nam;
}

console.log(result);
/* Task 4 */
const statement = 'I am a hard working person'
let p = statement.split(" ")
let q = p.reverse();
let r = q.join(" ");
console.log(r);
/* Task 5 */
let x = [1, 2, 3]
let y = x.slice();
y[0] = 99;
console.log("Original: ", x);
console.log("Copy: ", y);
/* Task 6 */
let students=[
    { name: "John", marks: 85 },
    { name:"Alice", marks: 90 }
];
for (let student of students) {
    console.log(student.name, " scored ", student.marks);
}
/* task 7 */
let arr=[
    [1, 2],
    [3, 4],
    [5, 6]
]
arr[1][0] = 99;
arr[1][1] = 85;
console.log(arr);
