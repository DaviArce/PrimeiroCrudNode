const controller = require('../controllers/controller.js');
const express = require('express');
const router = express();

router.get('/ver',controller.ver);

router.get('/ver/:id',controller.verCadastro);

router.delete('/deleta/:id',controller.delete);

router.post('/cadastrar',controller.cadastrar);

router.put('/atualizar/:id',controller.atualizar);



module.exports = router;



