const conexao = require('../config/conexao.js')

const PacienteSchema = new conexao.Schema({
    nome: String,
    endereco: String,
    datanasc: Date,
    sintomas: String
})

module.exports = conexao.model('Paciente',PacienteSchema)