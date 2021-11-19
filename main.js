let Message = ''

for(const user of users) {
    Message += ` User ID :${user.id} name: ${user.name} the city where this user lives is : ${user.address.city}`
}
    alert(Message)



    let id = []
    let promptId = prompt(`Please enter a user ID`)
    id.push(promptId)

    if (users[id]){
    console.log(users[id])
    }else{
    console.log(`Please enter a valid ID`);
}



    let alertToDO = ''

    for(const todo of todos) {
    alertToDO += `The ToDo full list::${todo.title}`
    }
    alert(alertToDO)

    const showAlert = confirm(`Do you want to see the ToDo title?`)

    if( showAlert){
    alert(`${users[id].username}  ${todos[id ].title}`)
    }
    
    confirm(`Do you want to see another user?`)
    let anotherUser = []
    let anotherUserId = prompt(`Please enter the ID of a new user`)
    anotherUser.push(anotherUserId)

if(users[anotherUser]){
    console.log(users[anotherUser])
}
