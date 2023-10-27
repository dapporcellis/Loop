const Usuario = require('../models/Usuario')
const Paciente = require('../models/Paciente')

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

function abreaddpaciente(req,res){
    res.render('addpaciente.ejs')
}

function addpaciente(req,res){
    
    let paciente = new Paciente({
        nome: req.body.nome,
        endereco: req.body.endereco,
        datanasc: req.body.datanasc,
        sintomas: req.body.sintomas
    })
    paciente.save().then(function(docs,err){
        console.log(docs)
        res.redirect('/addpaciente')
    })
}

function lstpaciente(req,res){
    Paciente.find({}).then(function(pacientes,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstpaciente.ejs',{Pacientes:pacientes})
        }
    })
}

function pesquisapaciente(req,res){
    Paciente.find({nome: new RegExp(req.body.pesquisar, "i")}).then(function(pacientes,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstpaciente.ejs',{Pacientes:pacientes})
        }
    })
}

module.exports = {
    abreindex,
    abreadd,
    add,
    listar,
    abreaddpaciente,
    addpaciente,
    lstpaciente,
    pesquisapaciente
}