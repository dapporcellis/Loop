const Usuario = require('../models/Usuario')

function abreindex(req,res){
    res.render('index')
}

function abreadd(req,res){
    res.render('add')
}

function add(req,res){
    let nome = req.body.nome
    let email = req.body.email
    let senha = req.body.senha
    let foto = req.body.foto

    let usuario = new Usuario({
        nome: nome,
        email: email,
        senha: senha,
        foto: foto
    })

    usuario.save().then(function(docs){
        res.send("Salvo")
    })
}

function listar(req,res){
    Usuario.find({}).then(function(usuarios){
        res.render('lst.ejs',{Usuarios:usuarios})
    })    
}

module.exports = {
    abreindex,
    abreadd,
    add,
    listar
}