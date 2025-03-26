const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop API'});
});

const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Telefone = require('./controllers/telefone');

router.post('/clientes',Cliente.create);
router.get('/clientes',Cliente.read);
router.patch('/clientes/:id',Cliente.update);
router.delete('/clientes/:id',Cliente.remove);

router.post('/pedido',Pedido.create);
router.get('/pedido',Pedido.read);
router.patch('/pedido/:id',Pedido.update);
router.delete('/pedido/:id',Pedido.remove);

router.post('/telefones',Telefone.create);
router.get('/telefones',Telefone.read);
router.patch('/telefones/:id',Telefone.update);
router.delete('/telefones/:id',Telefone.remove);

module.exports = router;
