// importar o nosso model para usar as funcoes do mongo no servico
const Tarefa = require('./../models/tarefa');

class tarefasService {
  // vai conectar com o banco de dados e retornar a lista de vagas
  findAll = async () => await TarefasModel.find();

  // buscar uma musica por id
  findById = async (id) => {
    return await TarefasModel.findById(id)
  };
 
  create = async (tarefa) => {
    return await TarefasModel.create(tarefa)  
  }


  edit = async (id, tarefa) => {
    return await TarefasModel.updateOne({ _id: id}, tarefa)
  }


  delete = async (id) => {
    return await TarefasModel.deleteOne({ _id: id})
  }

}



module.exports = tarefasService;