const express = require("express");
//const model = require("./models");
const usuarioController =  require("../controllers/usuario.controller.js");

const routes = express.Router();
//const Usuario = model.usuarioModel;
routes.post("/usuario", usuarioController.create);
//routes.get("/usuario/:id", usuarioController.getById);
routes.get("/usuario", usuarioController.getAll);
//routes.delete("/usuario/:id", usuarioController.deleteById);
//routes.put("/usuario/:id", usuarioController.alterById);

module.exports = routes;