
let data = require("../utils/data")

const createUser = ( {name,username, email, phone, website}) => {

    if (!name || !username ) throw Error("Name y username son imprescindibes aquí")

const newUser={
    id: Math.random()*1000, 
    name, 
    username, 
    email, 
    phone: phone? phone: null , 
    website: website? website: null,
    
    }
    data.push(newUser)
return data

}


module.exports=createUser