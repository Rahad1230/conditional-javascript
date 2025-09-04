42
/*
 * File: js-object-task.js
 * Created: Thursday, 4th September 2025 10:19:47 am
 * Author: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Last Modified: Thursday, 4th September 2025 10:53:16 am
 * Modified By: Md.Rahad (mdrahad1296@gmail.com)
 * -----
 * Copyright (c) 2025 Islamic University
 */
/* task-1 */
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"])

/* Task 2 */
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passenger_capaccity"] = 5;
console.log(car);
/* task 3 */
const Student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(Student.physics.marks);
/* Task 4 */
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student).length);
/* Task 5 */
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for (const key in myObject) {
    console.log('Key: ', key, '|', "Type:  ", typeof (myObject[key]));
    console.log(key, ':', myObject[key], '|', "Type:  ", typeof (myObject[key]));
}