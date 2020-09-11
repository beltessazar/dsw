const express = require("express");
const model = require("./models");

const app = express();
const Usuario = model.usuarioModel;

app.use(express.json());

///EndPoint para criar um usuario
app.post("/usuario", (request, response) =>{
    ///promises
    Usuario.create(request.body).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    })
});

app.get("/usuario/:id", (request, response) => {
    const id = request.params.id;
    Usuario.findByPk().then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

//Inicio servidor
app.listen(8888, (request, response)=>{
    console.log("Estamos no ar :) ")
});