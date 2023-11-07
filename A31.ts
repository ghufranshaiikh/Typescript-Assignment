// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty
let usernames:string[]=["Admin","Hamza","Asad","Affan","youan"];
 if (usernames.length>0){
for (let i = 0; i < usernames.length; i++) {
    usernames[i]==="Admin"?console.log(" Hello admin, would you like to see a status report"):console.log(` Hello ${usernames[i]}, thank you for logging in again`);
    ;  
    }
} 
//   If the list is empty, print the message We need to find some users!
else{
    console.log(" We need to find some users");
    
}
// Remove all of the usernames from your array, and make sure the correct message is printed.

let usersnames:string[]=[];
 if (usersnames.length>0){
for (let i = 0; i < usersnames.length; i++) {
    usersnames[i]==="Admin"?console.log(" Hello admin, would you like to see a status report"):console.log(` Hello ${usersnames[i]}, thank you for logging in again`);
    ;  
    }
} 
//   If the list is empty, print the message We need to find some users!
else{
    console.log(" We need to find some users");
    
}

        