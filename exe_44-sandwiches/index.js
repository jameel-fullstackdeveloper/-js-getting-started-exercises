/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time */

function get_sandwiches (persons){

   for (let person of persons) {
     console.log(`${person} wants Sandwiche`);
    }

}

get_sandwiches(['Jameel','Ahmed','Kahn']);
get_sandwiches(['Sohail','Ahmed']);
get_sandwiches(['Junaid','Ahmed','Kahn',"Ali"]);