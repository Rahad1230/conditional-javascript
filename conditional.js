/*
 * File: conditional.js
 * Created: Tuesday, 26th August 2025 6:19:15 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th August 2025 8:39:28 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
/* First problem */
let price = 300;
if (price > 500) {
    console.log("You Will get a free drinks")
} else {
    console.log("You have to bye a coke.which price is 30 taka");
}
/** Second Problem BMI is here */
let your_height = 1.7;
let your_weight = 58;
const BMI = (your_weight / (your_height * your_height))
console.log("Your BMI IS:" + BMI);
if (BMI < 18.5) {
    console.log("You Are UNderweight");
} else if(18.5<BMI && BMI <24.9){
    console.log("You are perfect.Do Excercise Regurly");
} else {
    console.log("You are Overweight.Keep Diet.");
}
/* Third problem Grade Calculator */
let mark = 67;
if (mark >= 90) {
    console.log("Your Grade is A+");
}
else if (mark >= 80) {
    console.log("Your Grade is A");
}
else if (mark >= 70) {
    console.log("Your Grade is A-");
}
else if (mark >= 60) {
    console.log("Your Grade is B");
}
else {
    console.log("Your Grade is F");
}
/* 4th problem Nested friends  */
const x = 85;
const y = 78;
if (x > 80) {
    if (y > 80) {
        console.log("Go For Lunch");
    }
    else if (y > 60 && y < 80) {
        console.log("Good Luck Next time");
    } else if (y < 60 && y >= 40) {
        console.log("Message unseen");
    } else {
        console.log("Block Your Friends");
}
} else {
    console.log("Go to Home And Sleep and Act Sad")
}
/* 5th problem ternary -number */
let num1 = 50;
let num2 = 60;
if (num1 > num2) {
    console.log("The Result is:" + num1 * 2);
}
else {
    console.log("The result is sum:" + (num1 + num2));
}
/* 6th Problem Ticket fare calculator */
let age = 65;
let student = false;

let fare = 1000;

if (age < 10) {
fare = 0;
}
else if (student) {
fare = fare/2;
}
else if (age >= 60) {
fare = fare-(fare*15/100);
}
console.log("Ticket Fare: " + fare + " tk");

