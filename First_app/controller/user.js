let users = [
    {id:1, name:'Rizki', email:'rizki@mail.com'},
    {id:2, name:'Raihan', email:'raihan@mail.com'},
    {id:3, name:'Carlos', email:'carlos@mail.com'}
]

const findUser = (id) =>{
    index = 0
    ketemu = -1
    while(ketemu == -1){
        if (id == users[index].id) {
            ketemu = index
        }
        index++
    }
    return ketemu
}

module.exports = {
    index : function (request,response) {
        response.json(users)
    },
    input : function (request, response) {
        console.log(request.body)
        response.send(request.body)
    },
    getUserById : function (request, response) {
        id = request.params.id;
        idx = findUser(id);
        dataUser = users[idx];
        response.json(dataUser);
    },
    update : function (request, response) {
        const id = request.params.id
        users.filter(user =>{
            if (user.id == id) {
                user.id = id
                user.name = request.body.name
                user.email = request.body.email
                
                return user
            }
        })
        response.send(users)
    },
    
    hapus : function (request, response) {
        let id = request.params.id
        users = users.filter(user => user.id !=id)
        response.send(users)
    }
}