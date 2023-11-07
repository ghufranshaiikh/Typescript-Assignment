// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let motorcycle =["Honda","Unique","Hispeed","Express"];
 let text = "i would like to own my ";
  for(let x=0;x<motorcycle.length;x++){
     console.log(`${text} ${(motorcycle[x])}`);
     
  }
 