"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following
// Tests for equality and inequality with strings
//  Equality will print 
console.log("test for Equality");
let a = "Apple";
let b = "banana";
console.log("'Apple'=='banana'");
console.log(a == b);
// InEquality will print true
console.log("test for InEquality");
let c = "Blue";
let d = "Red";
console.log("'Blue'!='Red'");
console.log(c != d);
//  Tests using the lower case function
// equality
console.log("test using the lowercase for Equality  ");
let t = "Apple";
let u = "apple";
console.log("'Apple'=='apple'");
console.log(t.toLowerCase() == u.toLowerCase());
// inequality
console.log("test using the lowercase for InEquality  ");
let m = "mango";
let M = "Mango";
console.log("'mango'!='Mango'");
console.log(m.toLowerCase() != M.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality
console.log("equality");
let num1 = 5;
let num2 = 5;
console.log("num1==num2");
if (num1 == num2) {
    console.log(`${num1} is equal to ${num2}`);
}
;
//  inequality
console.log("inequality");
let num3 = 5;
let num4 = 8;
console.log("num3!=num4");
if (num3 != num4) {
    console.log(`${num3} is not equal to ${num4}`);
}
;
//   greater than
console.log("greater than");
let num5 = 8;
let num6 = 5;
console.log("num5>num6");
if (num5 > num6) {
    console.log(`${num5} is greater than  ${num6}`);
}
;
//   less than
console.log("less than");
let num7 = 6;
let num8 = 8;
console.log("num7<num8");
if (num7 < num8) {
    console.log(`${num7} is less than  ${num8}`);
}
;
//  greater than or equal to
console.log("greater than or equal to");
let num9 = 10;
let num10 = 8;
console.log("num9>=num10");
//   greater than or equal to operator is used for weather something equal or greaterthan ,condition will true
if (num9 >= num10) {
    console.log(`${num9} is greater than or equal to ${num10}`);
}
;
//  less than or equal to
console.log("less than or equal to");
let num11 = 4;
let num12 = 8;
console.log("num11<=num12");
//   less than or equal to operator is used for weather something equal or less than ,condition will true
if (num11 <= num12) {
    console.log(`${num11} is less than or equal to ${num12}`);
}
;
// Tests using "and" and "or" operators
// using "And" operator
let namee = "ghufran";
let rollnumber = 13;
namee == "ghufran" && rollnumber == 13 ? console.log(`welcome mr ${namee}`) : console.log("invaild name or rollnumber");
//  using "or" operator
console.log("using 'or' operator");
let userage = 17;
userage < 18 || userage <= 60 ? console.log("you are eigibile to apply") : console.log("you are not eligible to apply");
//  Test whether an item is in a array
console.log("test weather an item is in a array");
let mobcompiness = ["Iphone", "samsung", "oneplus", "oppo", "vivo", "realme"];
let results = mobcompiness.includes("samsung");
console.log(results);
//  Test whether an item is not in a array
console.log(" Test whether an item is not in a array");
let rollnum = [9, 11, 13, 30, 50, 76];
let isrollno = rollnum.includes(10);
console.log(isrollno);
