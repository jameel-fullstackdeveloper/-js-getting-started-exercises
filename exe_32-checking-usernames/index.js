const current_users=['Ahmed','Khan','Niazi','Jamshaid','Ali'];

const new_users=['Junaid','Khan','Haji','Jamshaid','Ahmed'];


new_users.forEach(u => {
    if(current_users.includes(u)) {
        console.log(`${u} will need to enter a new username`)
    }

    
})

