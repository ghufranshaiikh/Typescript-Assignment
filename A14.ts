// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
 
 let guest = ["asad","hamza","affan"];
   let invite = "we are inviting you for dinner and i wish you will come ";
 for(let x=0;x<guest.length;x++){
      console.log(`Mr ${ guest[x] }, ${invite}`);
      
 }