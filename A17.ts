// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let freinds =["hamza","Affan","Shehzad","Asad"];
//   we dont have space and we only want two freind
  let finallist = freinds.splice(0,2);
    for(let x=0;x<freinds.length;x++){
        //  console.log(freinds[x]);
         
    }
    // Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner

    let freinds2 =["hamza","Affan","Shehzad","Asad"];
//   we dont have space and we only want two freind
  let finallist2 = freinds2.splice(0,2);
    for(let x=0;x<freinds2.length;x++){
        //  console.log(freinds2[x]);
        //    console.log(`Mr ${freinds2[x]},we only invite two people`);
           
         
    }
    // Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
    

    let Freind =["hamza","Affan","Shehzad","Asad"];
    let remove = Freind.splice(0,2);
       
      for(let x=0;x<remove.length;x++){
          //  console.log(`Mr ${remove[x]}, sorry we can not invite you at this party `);
           
 
      }

      // Print a message to each of the two people still on your list, letting them know they’re still invited.

      let Freinds =["hamza","Affan","Shehzad","Asad"];
      let stillinvited = Freind.splice(0,2);
         
        for(let x=0;x<stillinvited.length;x++){
            //  console.log(`Mr ${stillinvited[x]}, you are still invited in my party `);
             
   
        }

        // Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

        let Guest=["hamza", "Affan", "Shehzad", "Asad"];
//    do bandy bahar nikal dene han
  let RemoveGuest1= Guest.splice(1,2);
//    do aur nikal diye 
   let RemoveGuest2 = Guest.splice(0,2);
   console.log(Guest);
 