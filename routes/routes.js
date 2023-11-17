const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');
const upload = multer({ dest: './public' })


router.get('/',controller.abreindex)

//rota para abrir formulário de adicionar
router.get('/add',controller.abreadd)

//rota para receber dados do formulário e adicionar ao banco mongodb
router.post('/add', upload.single('foto'), controller.add)

router.get('/lst',controller.listar)



router.get('/addpaciente', controller.abreaddpaciente)
router.post('/addpaciente',controller.addpaciente)

router.get('/lstpaciente',controller.lstpaciente)
router.post('/lstpaciente',controller.pesquisapaciente)

router.get('/edtpaciente/:id', controller.abreedtpaciente)
router.post('/edtpaciente/:id', controller.edtpaciente)

router.get('/delpaciente/:id', controller.delpaciente)

module.exports = router