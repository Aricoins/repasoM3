const express = require ("express")
const morgan = require("morgan");
const cors = require("cors")
const usersRouter = require("./routes/usersRouter");
const postRouter = require("./routes/postRouter");


const app = express();

const myMiddleware = (req, res, next)=>{

console.log ("middleware")
next()
};

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
//app.use(myMiddleware)
app.use("/users", usersRouter)
app.use("/post", postRouter)

app.use("*", (req,res)=>{ 
res.status(404).json({error:"Not fund"}) }
)


module.exports = app

//* USERS
// -GET /users => responde con todos los usuarios. salvo que reciba una query "name" 
// - GET /users/:id responda con el usuario ID
// -GET /users/phone
// -POST /users =>crar usuario nuevo
// -PUT /users/:id =>reciobir por body los datos nuevos del usuario
// -DELETE /users/:id => eliminar el usuario

