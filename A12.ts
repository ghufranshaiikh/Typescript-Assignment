// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let newname = ["Hamza","Affan","Shehzad","Asad","Youan","Saim"];
 let messages ="your account is credited";
   for( let x=0;x<newname.length;x++){
      console.log(`${ (newname[x]) } , ${messages} \n`);
      
   }