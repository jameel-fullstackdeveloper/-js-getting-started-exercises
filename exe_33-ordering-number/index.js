const numbers=[1,2,3,4,5,6,7,8,9];


for(i=1; i<= numbers.length;i++) {
    if(i==1) {
      console.log(`${i}st`);
    } else if(i==2) {
        console.log(`${i}nd`);
    } else if(i==3) {
            console.log(`${i}rd`);
    } else {
        console.log(`${i}th`);
    }
}


//Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
