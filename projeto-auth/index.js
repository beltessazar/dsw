const express = require("express");
const cookieSession = require("cookie-session");
const passaport = require("passport");
const cors = require("cors");
const passport = require("passport");
const { request, response } = require("express");
const localStrategy = require("passport-local").Strategy;
//O que vamos precisar
//servidor de aplicação express
const app = express();
app.use(express.json());
//gerenciador de seçao com cookies = cookie-session
app.use(
    cookieSession({
        name: "S3cret",
        keys: ["vueauthrandomkey"],
        maxAge: 60 * 1000,//1minuto
    })
)
//gerenciador de Login - passaporte
//essa lista simula o banco de dados
//fonte de dados para os usuarios - lista de usuarios   
const users = [
    {
    id: 1,
    user: "Usuario 1",
    email: "user@email.com",
    pwd: "123"
    },
    {
        id: 2,
        user: "Usuario 2",
        email: "user@email.com",
        pwd: "456"
        }
]
passaport.use(
    new localStrategy({
        usernameField: "user",
        passwordField: "pwd"
    },
    (username, password, done) =>  {
        //pode ser de um banco de dados ou arquivo, lista , etc
        let user = users.fin((user) => {
            return user.email == username && user.pwd === password;
        })

        if(user)
            done(null, user);
        else
            done(null, false, {message: "Usuario e ou Senha incorretos"})
    })
);

app.use(passport.initialize());
app.use(passport.session());
//estratégia de login (Local) - passaporte local
//gerenciador de cors - cors
app.use(cors({credentials: true, origin: "http://localhost:8080"}));

app.post("/api/login", (request, response, next) => {
    passport.authenticate("local", (err, user, info)=>{
        if(err) return next(err);

        if(!user)
            return response.status(400).send([user, "Não foi possível logar", info]);

        request.login(user, (err)=>{
            response.send("Logado!");
        });
    })(request, response, next);
});

app.listen("3030", (request, response) => {
    console.log("Servidor na porta 3030");
});