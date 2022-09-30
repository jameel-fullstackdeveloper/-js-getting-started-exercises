
let person_name;

person_name = "Eric";

//print the person name in lowercase
console.log(person_name.toLowerCase());

//print the person name in upercase
console.log(person_name.toUpperCase());

//print the person name in titlecase
console.log(person_name.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), ''));