const express = require("express");
const model = require("./models");
const routes = require("./routes/usuario.route.js");
const cors = require("cors");
const app = express();
const Usuario = model.usuarioModel;

app.use(cors());
app.use(express.json());
//configura rotas no app servidor express
app.use("", routes);
/* app.post("/usuario", (request, response)=>{
    Usuario.create(request.body).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

app.get("/usuario/:id", (request, response) => {
    const id = request.params.id
    Usuario.findByPk(id).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
}
); */

app.listen(8888, (request, response)=>{
    console.log("Estamos no ar!");
});