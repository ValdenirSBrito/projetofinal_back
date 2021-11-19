// importo o servico
const TarefasService = require('./../services/tarefas.service');

// inicializo a classe do servico para poder acessar seus metodos
const tarefasService = new TarefasService;

class tarefasController {
  getTarefas = async (req, res) => {
    // acesso a funcao do service para acessar a lista de vagas do banco
    const tarefas = await tarefasService.findAll();
    res.send(tarefas)
  }

  getTarefasById = async (req, res) => {
    const idParam = req.params.id;
    const tarefa = await tarefasService.findById(idParam);
    res.send(tarefa);
  }
}

module.exports = tarefasController;