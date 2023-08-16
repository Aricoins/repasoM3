const data = require("../utils/data")

const updatedUser = (id, info) =>{
const user = data.find((us) => us.id == id)
if (!user ) throw Error ("Usuario inexistente")
    const {name, username, email, phone, website } = info

if ( ![name, username, email, phone, website].every(Boolean))
 throw Error("faltan datos") 

 user.name = name;
 user.username = username;
 user.email = email;
 user.phone = phone; 
 user.website = website

 return user
} 

module.exports = updatedUser