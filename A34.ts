// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
 let favpizza:string[]=["peporni","perypery","chickenfajita"];
  for (let faviourite of favpizza) {
    console.log(`${faviourite}`);
    
  }

//   Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza

for (let faviourite of favpizza) {
    console.log(`i like ${faviourite} pizza`);
    
  }

//   Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("I like all kinds of pizza! 🍕 Pepperoni, peri peri, and chicken fajita pizzas are definitely some of my favorites. They all have their unique flavors and toppings that make them so enjoyable. Pizza is just so versatile and delicious. 😋 I really love pizza! It's always a go-to comfort food for me. What about you? Do you have a favorite pizza that you absolutely adore?");
