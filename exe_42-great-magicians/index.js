
const magician = ['David Copperfield','Doug Henning','Ricky Jay'];



function make_great(){
   magician.forEach(m => {
      m = 'Great ' + m;
      console.log(m);
   });
}

make_great(magician);