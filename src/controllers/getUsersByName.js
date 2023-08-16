const data = require("../utils/data")

const getUsersByName= (name)=>{
const users = data.filter((user) =>user.name === name)
return users
}

module.exports = getUsersByName