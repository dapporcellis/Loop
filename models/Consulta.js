const conexao = require('../config/conexao.js')

const ConsultaSchema = new conexao.Schema({
    sintomas: String,
    receita: String,
    data: Date,
    paciente:{
        type: conexao.Schema.Types.ObjectId,
        ref: "Paciente"
    }
})

module.exports = conexao.model('Consulta',ConsultaSchema)