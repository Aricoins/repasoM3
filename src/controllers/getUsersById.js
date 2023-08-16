const data =require("../utils/data")

const getUserById= (id) =>{
    const user= data.find((us) => us.id == id)
    
    if (user)  return user;
    else throw Error ("Usuario Inexistente ")

}

module.exports = getUserById