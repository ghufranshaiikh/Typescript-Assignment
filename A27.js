"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
let alien_color = 'green';
alien_color == "green" ? console.log('The alien color is green. You just earned 5 points for shooting the alien!') : console.log('The alien color is not green. No points awarded.');
// If the alien is yellow, print a message that the player earned 10 points.
let aliens_color = 'yellow';
aliens_color == "yellow" ? console.log('The alien color is yellow. You just earned 10 points for shooting the alien!') : console.log('The alien color is not yellow. No points awarded.');
// If the alien is red, print a message that the player earned 15 points.
let Alien_color = 'red';
Alien_color == "red" ? console.log('The alien color is red. You just earned 15 points for shooting the alien!') : console.log('The alien color is not red. No points awarded.');
// Write three versions of this program, making sure each message is printed for the appropriate color alien
alien_color == "green" ? console.log('The alien color is green. You just earned 5 points for shooting the alien!') : aliens_color == "yellow" ? console.log('The alien color is yellow. You just earned 10 points for shooting the alien!') : Alien_color == "red" ? console.log('The alien color is red. You just earned 15 points for shooting the alien!') : console.log('The alien color is unknown. No points awarded');
