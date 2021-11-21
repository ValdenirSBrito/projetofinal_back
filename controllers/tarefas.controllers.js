
const TarefasService = require('./../services/tarefas.service');

const tarefasService = new TarefasService;

class tarefasController {
  getTarefas = async (req, res) => {
    const tarefas = await tarefasService.findAll();
    res.send(tarefas)
  }

  getTarefasById = async (req, res) => {
    const idParam = req.params.id;
    const tarefa = await tarefasService.findById(idParam);
    res.send(tarefa);
  }



  createTarefa = async (req, res) => {
    const tarefa = req.body;
    if(!req.body){
     return;
   }
    await tarefasService.create(tarefa)
    .then(() => {
      res.send({message: `Tarefa ${tarefa.nome} Cadastrada com sucesso`})
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor: ${err}`})
    })
  }

  editTarefa = async (req, res) => {
    const idParam = req.params.id;
    const tarefaEdit = req.body;
    await tarefasService.edit(idParam, tarefaEdit)
    .then(() => {
      res.send({message: `Tarefa Editada com sucesso`})
    })
    .catch( err => { 
      res.status(500).send({message: `Erro: ${err}`})
    })
  }

  deleteTarefa = async (req, res) => {
    const idParam = req.params.id;
    await tarefasService.delete(idParam)
    .then(() => {
      res.send({message: 'Excluido com sucesso'})
    })
    .catch(err => {
     res.status(500).send({message: `Error: ${err}`});
    })
  }
}


module.exports = tarefasController;