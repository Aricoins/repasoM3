const express =require("express");
const server = require ("./src/app.js" )

const PORT = 3001;

server.listen(PORT, ()=>{

    console.log ("Servidor en puerto 3001 ")
})

module.export= server



