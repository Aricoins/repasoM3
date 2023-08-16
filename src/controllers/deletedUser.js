let data = require("../utils/data")


const deletedUser= (id)=>{ 


    const user = data.find((us)=> us.id ==id)

    if(!user) throw Error ( "usuario inexistente")

    data = data.filter ( (user)=> user.id != id)
    return user

}


module.exports = deletedUser