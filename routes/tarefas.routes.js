// importar o express para poder inicializar as minhas rotas
const express = require('express');
//importar o controller para acessar as funcoes
const TarefasController = require('./../controllers/tarefas.controllers');


// inicializa as rotas
const router = express.Router();
// inicializa a classe do controller
const tarefasController  = new TarefasController;

// [GET] /vagas - Retornar uma lista de vagas
router.get('/', tarefasController.getTarefas);

//[GET /vagas/:id - retorna um item por id
router.get('/:id', tarefasController.getTarefasById);


module.exports = router;