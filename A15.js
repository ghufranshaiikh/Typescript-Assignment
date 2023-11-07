"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestname = ["Hamza", "Affan", "Shehzad", "Asad"];
let message = "we are inviting you to a dinner";
let absentguest = guestname.splice(2, 1);
guestname.push("saim");
for (let x = 0; x < guestname.length; x++) {
    console.log(`Mr ${guestname[x]},${message}`);
}
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestname1 = ["Hamza", "Affan", "Shehzad", "Asad"];
let message1 = "we are inviting you to a dinner";
let absentguest1 = guestname1.splice(2, 1);
guestname1.push("saim");
for (let x = 0; x < guestname1.length; x++) {
    console.log(`Mr ${guestname1[x]},${message1}`);
    console.log(`${absentguest1},who cant make it dinner`);
}
;
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let guestname2 = ["Hamza", "Affan", "Shehzad", "Asad"];
let message2 = "we are inviting you to a dinner";
let absentguest2 = guestname2.splice(2, 1, "saim");
for (let x = 0; x < guestname2.length; x++) {
    console.log(`Mr ${guestname2[x]},${message2}`);
}
// Print a second set of invitation messages, one for each person who is still in your list.
let guestname3 = ["Hamza", "Affan", "Shehzad", "Asad"];
let message3 = "we are inviting you to a dinner";
let absentguest3 = guestname3.splice(2, 1);
guestname3.push("saim");
for (let x = 0; x < guestname3.length; x++) {
    console.log(`Mr ${guestname3[x]},${message3}`);
    console.log(`${absentguest3[0]},who cant make it dinner`);
    console.log(`Mr ${guestname3[0]},this is reminder message that you are invited in my dinner party`);
}
