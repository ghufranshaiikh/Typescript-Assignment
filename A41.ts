// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magiciansnames:string[]=["hamza","Affan","shahzad","asad"];
function show_magicians(magicians:string[]) {
    for (let magician of magicians) {  
        console.log(magician);
        
    }
    
}
 show_magicians(magiciansnames)