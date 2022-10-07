
const magician = ['David Copperfield','Doug Henning','Ricky Jay'];

function make_great() {
   
   for(let i=0; i<magician.length;i++){
      magician[i] = "Great " + magician[i];
   }
}

function show_magicians(){
   make_great()

    magician.forEach(m => {
      console.log(m);
   });
}

show_magicians();
