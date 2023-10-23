const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/',controller.abreindex)

//rota para abrir formulário de adicionar
router.get('/add',controller.abreadd)

//rota para receber dados do formulário e adicionar ao banco mongodb
router.post('/add',controller.add)

router.get('/lst',controller.listar)

module.exports = router