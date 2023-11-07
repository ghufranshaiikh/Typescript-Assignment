"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magiciansnames = ["hamza", "Affan", "shahzad", "asad"];
function show_magicians(magician) {
    for (let magicians of magician) {
        console.log(magicians);
    }
}
show_magicians(magiciansnames);
