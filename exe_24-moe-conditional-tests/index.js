//Tests for equality and inequality with strings
let student_name = 'jameel';
console.log("Is student_name == 'jameel'? I predict True.")
console.log(student_name == 'jameel')

console.log("Is student_name != 'Jameel'? I predict False.")
console.log(student_name != 'jameel')

//Tests using the lower case function
console.log("Is student_name using the lower case  == 'jameel'? I predict True.")
console.log(student_name.toLowerCase() == 'jameel')

console.log("Is student_name using the lower case != 'Jameel'? I predict False.")
console.log(student_name.toLowerCase() != 'jameel')

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let score = 55;
//equality
console.log("Is score == 55 ? I predict True.")
console.log(score == 55 )

//inequality
console.log("Is score != 55 ? I predict False.")
console.log(score != 55 )

//greater than 
console.log("Is score > 10 ? I predict True.")
console.log(score > 10 )

// less than
console.log("Is score < 55 ? I predict False.")
console.log(score < 55 )

//greater than or equal to
console.log("Is score >= 55 ? I predict True.")
console.log(score >= 55 )


//less than or equal to
console.log("Is score <= 5 ? I predict True.")
console.log(score <= 5 )


//Tests using "and" and "or" operators
console.log("Is score  == 55  and score > 5 ? I predict True.")
console.log(score == 55  && score > 5)


console.log("Is score  == 5  or score < 5 ? I predict True.")
console.log(score == 5  || score < 5)


let places= ["Makka","Auckland","Madina","London","Dubai"];

//Test whether an item is in a array
console.log("Is Madina  in places ? I predict True.")
console.log(places.includes("Madina"));

//Test whether an item is not in a array
console.log("Is Cube  in places ? I predict False.")
console.log(places.includes("Cube"));
