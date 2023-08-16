const {Router} = require("express")
const getUsers = require("../controllers/getUsers")
const getUserById = require("../controllers/getUsersById")
const usersRouter = Router()
const getUsersByName = require ("../controllers/getUsersByName")
const getPhoneUsers = require ("../controllers/getPhoneUsers")
const createUser =require("../controllers/createUser")
const updatedUser = require ("../controllers/updateUser")
const deletedUser = require ("../controllers/deletedUser")

usersRouter.get("/", (req, res)=> {
try
    {
    //const users = name ? getUsersByName (name):getUsers();
    const {name} = req.query;
    const users = name ? getUsersByName(name) : getUsers();
    
    res.status(200).json(users)
    } catch(error)
   {
    res.status(500).json({error: "No encontramos ese nombre"   })
}    
}); 


usersRouter.get("/phone", (req, res)=> {
    try{
        const users = getPhoneUsers();
        res.status(200).json(users)
    }catch
   {  
    res.status(500).json({error: "No encontramos ese telefono" })
}    });

usersRouter.get("/:id", (req, res)=> {
try {
    const {id} =req.params;
    const user = getUserById(id);
    res.status(200).json(user);    
} catch(error){
    res.status(400).json({error: error.message })
}

}); 


usersRouter.post("/", (req, res)=> {
 
      const {name, username,  email,  phone, website } = req.body
    /*name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: null,
      website: "ramiro.info",
      */

      try{ 
     const newUser = createUser({name, username, email, phone, website})

    res.status(200).json(newUser)
}catch (error) {

    res.status(400).json({error: "Faltan datos"})
} 

});

usersRouter.put("/:id", (req, res)=> {
    const {id} = req.params;
    const {name, username, email, phone, website}= req.body
    try{ 
    updatedUser (id ,  
    {name,
     username,
     email, 
     phone, 
     website}
     ) 
     res.status(200).json({ 
        updated: "ok", 
        user: updatedUser  })

    }
    catch(error) {

        res.status(400).json ({error: error.message})
    }
    });

    usersRouter.delete( "/:id", (req, res)=> {
       
       try {
        const {id  } = req.params;
        const deleteUser= deletedUser(id)
        res.status(200).json({ 
        deleted:"ok",
        user:deleteUser })
        } catch (error) {
        res.status(400).json ({error:error.message})
       }
       
       
        })
 
module.exports = usersRouter

//* USERS
// -GET /users => responde con todos los usuarios. salvo que reciba una query "name" 
// - GET /users/:id responda con el usuario ID
// -GET /users/phone
// -POST /users =>crar usuario nuevo
// -PUT /users/:id =>reciobir por body los datos nuevos del usuario
// -DELETE /users/:id => eliminar el usuario