// importar o express para poder inicializar as minhas rotas
const express = require('express');
//importar o controller para acessar as funcoes
const TarefasController = require('./../controllers/tarefas.controllers');


// inicializa as rotas
const router = express.Router();
// inicializa a classe do controller
const tarefasController  = new TarefasController;

// [GET] /tarefas - Retornar uma lista de vagas
router.get("/", tarefasController.getTarefas);

//[GET /tarefas/:id - retorna um item por id
router.get("/:id", tarefasController.getTarefasById);

// [POST] /tarefas/add - cadastrar uma nova musica no nosso banco de dados.
router.post("/add", tarefasController.createTarefa);

// [PUT] /tarefas/{id} - Editar uma musica pre cadastrada de acordo com o seu id.
router.put("/:id", tarefasController.editTarefa);

// [DELETE] /tarefas/{id} - Excluir uma musica pré cadastrada no DB por id.
router.delete("/:id", tarefasController.deleteTarefa);


module.exports = router;