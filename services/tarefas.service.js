// importar o nosso model para usar as funcoes do mongo no servico
const Tarefa = require('./../models/tarefa');

class tarefasService {
  // vai conectar com o banco de dados e retornar a lista de vagas
  findAll = async () => await Tarefa.find();

  // vai buscar um unico item no banco de acordo com o seu id
  findById = async (id) => await Tarefa.findById(id);

}

module.exports = tarefasService;