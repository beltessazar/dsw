const { response } = require("express");
const model =  require("../models");
const Usuario  = model.usuarioModel;

const create = (request, response) => {
    Usuario.create(request.body).then((object)=>{
        response.status(200).send(object);
        console.log(object);
    }).catch((error)=>{ 
        console.error(error);
        response.status(400).send(error);
    });
};


const getAll = (request, response) => {
    Usuario.findAll({
      attributes: [
        "id",
        "dataNascimento",
        "nacionalidade",
        "endereco",
        "bairro",
        "cidade",
        "telefone",
        "grupoId" 
      ],
    }).then((object) => {
        response.status(200);
        response.send(object);
        console.log("Deu certo Parça")
      })
      .catch((error) => {response.status(400).send(error)
                        console.log("Erro em Usuario.controller")
      });
  };
/* const getAll = (request, response) => {
    Usuario.getAll(request.body).then((object)=>{
        response.status(200).send(object.dataValues);
        console.log(object);
    }).catch((error)=>{
        console.error(error);
        response.status(400).send(error);
    });
}; */
module.exports = {
    create, getAll
}
