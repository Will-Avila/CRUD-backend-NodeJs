const { Router } = require('express');

const ProdutosController =require('./controller/ProdutosController');

const router = Router();

router.post('/create-produto', ProdutosController.createProduto);
router.put('/update-produto/:id', ProdutosController.updateProduto);
router.get('/list-produtos', ProdutosController.listProdutos);
router.delete('/delete-produto/:id', ProdutosController.deleteProduto);

module.exports = router;