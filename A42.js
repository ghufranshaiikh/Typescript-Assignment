// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Gre
var magicianNames1 = ["David Blaine", "Derren Brown", "Siegfried & Roy", "Chris Angel"];
function make_great() {
    var great_magicians = magicianNames1.map(function (magicianNames1) { return "Great ".concat(magicianNames1); });
    console.log(great_magicians);
}
make_great() == show_magicians1();
function show_magicians1() {
}
show_magicians1();
