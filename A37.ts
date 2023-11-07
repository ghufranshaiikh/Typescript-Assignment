// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

function make_shirt(size:string) {
 if(size==="small"){
    console.log("i like python");
 } else if(size=="medium"){
    console.log("i like java");
 }else if(size==="large"){
    console.log("i love typescript");
    
 }
    
} 
 make_shirt("large");
