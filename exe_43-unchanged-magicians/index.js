//orginal array
const magician = ['David Copperfield','Doug Henning','Ricky Jay'];

//Call the function make_great() with a copy of the array of magicians’ names.
function make_great() {
   
   //return the new array and store it in a separate array
   const copyArray = [...magician];

   for(let i=0; i<copyArray.length;i++){
      copyArray[i] = "Great " + copyArray[i];
   }

   return copyArray;
}

const great_magician = make_great();

function show_magicians(){
  
   great_magician.forEach(m => {
      console.log(m);
   });

    magician.forEach(m => {
      console.log(m);
   });
}

show_magicians();
