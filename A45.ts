// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly


class Car {
    manufacturerName:string;
    modelNumber:number;
    color:string;
    constructor(maufacturerName:string,modelNumber:number,color:string){
        this.manufacturerName=maufacturerName;
        this.modelNumber=modelNumber;
        this.color=color;        
    }
}
let myCar1 = new Car("Toyota", 1234567890,"Red");
console.log(myCar1);

let myCar2 = new Car("Tesla",2562822736476,"Blue");
console.log(myCar2);