// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestName = ["Hamza","Affan","Shehzad","Asad"];
  guestName.push("Youan","haseeb","Ayan");
 let Message ="we are inviting you to a dinner";
   for(let x=0;x<guestName.length;x++){
      console.log(`Mr ${guestName[x]},${Message}`);
      
   }

  //  Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

  let guestname = ["Hamza","Affan","Shehzad","Asad"];
  let message ="we are inviting you to a dinner";
   let absentguest =guestname.splice(2,1);
    guestname.push("saim","youan","haseeb");
    for(let x=0;x<guestname.length;x++){
       console.log(`Mr ${guestname[x]},${message}`);
        console.log(`${absentguest[0]},who cant make it dinner`);
         console.log(`Mr ${guestname[0]},this is reminder message that you are invited in my dinner party`);
          console.log(`Mr${guestname[0]},we are arranging a big dinner and we invite more three people`);
          
    }
            // Add one new guest to the beginning of your array.

            let GuestName = ["hamza","Affan","Shehzad","Asad"];
            let addnewguest = GuestName.splice(0,0,"youan");
              console.log(GuestName);


              // Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
      
              
              let GuestsName = ["hamza","Affan","Shehzad","Asad"];
  let AddNewGuest = GuestsName.splice(2,0,"youan");
    console.log(GuestsName);
