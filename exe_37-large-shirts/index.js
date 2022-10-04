
function make_shirt(size,message) {
    if(size==null) {
        size = "L";
    }
    console.log(`${size} : ${message}`);
};

make_shirt(null,  "I love JavaScript");

make_shirt("M","I love JavaScript");

make_shirt("S","I love JavaScript");