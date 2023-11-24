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
    let foto = req.file.filename

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


function abreedtpaciente(req,res){
    Paciente.findById(req.params.id).then(function(paciente,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('edtpaciente.ejs',{Paciente:paciente})
        }
    })
}

function edtpaciente(req,res){
    Paciente.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        endereco: req.body.endereco,
        datanasc: req.body.datanasc,
        sintomas: req.body.sintomas
    }).then(function(paciente,err){
        if(err){
            res.send(err.message);
        }else{
            res.redirect('/lstpaciente');
        }
    })
}

function delpaciente(req,res){
    Paciente.findByIdAndDelete(req.params.id)
        .then(function(paciente,err){
            if(err){
                res.send(err.message);
            }else{
                res.redirect('/lstpaciente')
            }
        })
}

function abreaddconsulta(req,res){
    res.render('addconsulta.ejs')
}

function addconsulta(req,res){
    
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

function lstconsulta(req,res){
    Paciente.find({}).then(function(pacientes,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstpaciente.ejs',{Pacientes:pacientes})
        }
    })
}

function pesquisaconsulta(req,res){
    Paciente.find({nome: new RegExp(req.body.pesquisar, "i")}).then(function(pacientes,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstpaciente.ejs',{Pacientes:pacientes})
        }
    })
}


function abreedtconsulta(req,res){
    Paciente.findById(req.params.id).then(function(paciente,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('edtpaciente.ejs',{Paciente:paciente})
        }
    })
}

function edtconsulta(req,res){
    Paciente.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        endereco: req.body.endereco,
        datanasc: req.body.datanasc,
        sintomas: req.body.sintomas
    }).then(function(paciente,err){
        if(err){
            res.send(err.message);
        }else{
            res.redirect('/lstpaciente');
        }
    })
}

function delconsulta(req,res){
    Paciente.findByIdAndDelete(req.params.id)
        .then(function(paciente,err){
            if(err){
                res.send(err.message);
            }else{
                res.redirect('/lstpaciente')
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
    pesquisapaciente,
    delpaciente,
    abreedtpaciente,
    edtpaciente
}