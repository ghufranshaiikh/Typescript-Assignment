// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(bread:string,kebabs:string,...sauces:string[]){
    return(`Making ${bread} with ${kebabs} and ${sauces} Sauces In Just 5 Minutes!`);

}
let p1 = makeSandwich("White Bread","Shami kebab","BBQ","Chipotle");
console.log(p1);

let p2 = makeSandwich("Brown Bread","BBQ","Mayo","Ketchup");
console.log(p2);

let p3 = makeSandwich("Roll","Chicken Tikka","Green Chutney","Raita");
console.log(p3);