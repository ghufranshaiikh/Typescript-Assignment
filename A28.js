"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
let babyage = 1.5;
if (babyage < 2) {
    console.log("the person is a baby ");
}
//   If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
function toddlerage(age) {
    if (age >= 2 && age < 4) {
        return "the person is a toddler";
    }
    else {
        return "the person is not a toddler";
    }
}
console.log(toddlerage(3));
//   If the person is at least 4 years old but less than 13, print a message that the person is a kid.
function kidage(age) {
    if (age >= 4 && age < 13) {
        return "the person is a kid";
    }
    else {
        return "the person is not a kid ";
    }
}
console.log(kidage(7));
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
function teenagerage(age) {
    if (age >= 13 && age < 20) {
        return "the person is a teenager";
    }
    else {
        return "the person is not a teenager";
    }
}
console.log(teenagerage(17));
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
function adultage(age) {
    if (age >= 20 && age < 65) {
        return "the person is an adult";
    }
    else {
        return "the person is not an adult";
    }
}
console.log(adultage(34));
// If the person is age 65 or older, print a message that the person is an elder
function elderage(age) {
    if (age >= 65) {
        return "the person is an elder";
    }
}
console.log(elderage(500));
