const users = ['admin','operator','subscriber','super'];

users.forEach(u => {
    if(u=="admin") {
        console.log(`Hello ${u}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${u}, thank you for logging in again.`)
    }

    
})

