/*
 * File: practice_part_2.js
 * Created: Saturday, 13th September 2025 9:36:45 pm
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Saturday, 13th September 2025 10:36:27 pm
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
//Task-1: find the minimum
function heightlow(arr) {
    let x = arr[0];
    for (let p of arr) {
        if (p < x ) {
            x = p;
        }
    }
    console.log(x);
}
const heights = [167, 190, 120, 165,12, 137];
heightlow(heights);
//Task-2: Find the smallest Name....
function namesmall(arr) {
    let x = arr[0].length;
    let y = arr[0];
    for (let p of arr) {
        if (p.length < x) {
            x = p.length;
            y = p;
        }
    }
    console.log(y);
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
namesmall(heights2);
//task 3: total budget
function budget(laptop, tablet, mobile) {
    total = (laptop * 35000) + (tablet * 15000) + (mobile * 20000);
    return console.log(total);
}
budget(5, 3, 4);
function avgprice(phones) {
    let total = 0;
    let count = 0;
    for (let x of phones) {
        //console.log(x.price);
        total += x.price;
        count++;

    }
    let avg = total / count;
    console.log(total, count ,"....Average Price: ",avg);

}
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
];
avgprice(phones);
//Task 5: Total salary should given
function totalsalary(yees) {
    let total = 0;
    for (let x of yees) {
        console.log(x);
        total += x.starting + (x.experience * x.increment);
    }
    console.log("Total salary is ", total);
}
const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
totalsalary(employees);
//all Task are done now assaignment task....Thanks...
