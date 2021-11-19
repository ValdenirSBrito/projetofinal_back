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

// funcao que cadastra a tarefa recebida pelo front no banco de dados
createTarefa = async (req, res) => {
  // acesso o corpo da requisicao para pegar o objeto.
  // objeto para ser cadastrado no banco.
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

// atualiza uma tarefa de acordo com o id e objeto recebido para ser atualizado.
editTarefa = async (req, res) => {
  const idParam = req.params.id;
  // pegamos o objeto com os dados atualizado para atualizar no banco.
  const tarefaEdit = req.body;
  await tarefasService.edit(idParam, tarefaEdit)
  .then(() => {
    res.send({message: `Tarefa Editada com sucesso`})
  })
  .catch( err => { 
    res.status(500).send({message: `Erro: ${err}`})
  })
}

// recebe um id via parametro e exclui uma tarefa de acordo com esse id
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


module.exports = tarefasController;