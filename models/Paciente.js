const conexao = require('../config/conexao.js')

const PacienteSchema = new conexao.Schema({
    nome: String,
    endereco: String,
    datanasc: Date,
    consultas: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Consulta'
    }
})

module.exports = conexao.model('Paciente',PacienteSchema)