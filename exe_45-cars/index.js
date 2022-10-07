/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */


function store_car (manufacturer,model, ...theArgs) {
  
    let obj = {
      manufacturer,
      model,
      theArgs
    }
    
    return  obj;

}

car01 = store_car('Sazuki',"2014","White","VXL");
car02 = store_car('Honada',"2009");
car03 = store_car('Toyta',"2022","Red");

console.log(car01)
console.log(car02)
console.log(car03)