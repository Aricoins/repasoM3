const data = require ("../utils/data")


const getPhoneUsers = ( ) => data.filter ((user) => user.phone)
    

module.exports = getPhoneUsers