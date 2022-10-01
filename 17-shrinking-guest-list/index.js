
let guests= ['Ali','Imran','Kamal','Amjad'];

//printing guests 
console.log(`${guests[0]}, You are invited to join dinner today. `);
console.log(`${guests[1]}, You are invited to join dinner today. `);
console.log(`${guests[2]}, You are invited to join dinner today. `);
console.log(`${guests[3]}, You are invited to join dinner today. `);


console.log(`${guests[3]}, is not coming `);

//chaning
guests[3] = "Kamran";

//printing guests 
console.log(`${guests[0]}, You are invited to join dinner today. `);
console.log(`${guests[1]}, You are invited to join dinner today. `);
console.log(`${guests[2]}, You are invited to join dinner today. `);
console.log(`${guests[3]}, You are invited to join dinner today. `);

console.log("Luckly found a bigger dinner table");

//add new guest in the begging of array
guests.unshift("Saeed");

//add new guest in the middle  of array
guests.splice(2,0,"Haroon");

//add new guest in the end  of array
guests.push("Kayo");


//printing updated guests 
console.log(`${guests[0]}, You are invited to join dinner today. `);
console.log(`${guests[1]}, You are invited to join dinner today. `);
console.log(`${guests[2]}, You are invited to join dinner today. `);
console.log(`${guests[3]}, You are invited to join dinner today. `);
console.log(`${guests[4]}, You are invited to join dinner today. `);
console.log(`${guests[5]}, You are invited to join dinner today. `);
console.log(`${guests[6]}, You are invited to join dinner today. `);

console.log("Sorry, I can invite only two people for dinner");
 
//removing guests
console.log(guests.pop() + ', sorry you can’t invite them to dinner.');
console.log(guests.pop() + ', sorry you can’t invite them to dinner.');
console.log(guests.pop() + ', sorry you can’t invite them to dinner.');
console.log(guests.pop() + ', sorry you can’t invite them to dinner.');

//print guests
console.log(`${guests[0]}, You are invited to join dinner today. `);
console.log(`${guests[1]}, You are invited to join dinner today. `);

guests= [];

console.log(guests);

