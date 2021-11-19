// importar o mongoose
const mongoose = require('mongoose');

// Schemas --> é a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
// Documents --> sao como se fosse as linhas da nossa tabela .
// Model --> São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
// Collections --> são equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.

// criar o nosso model

const tarefaModel = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  logo: { type: String, required: true },
  prioridade: { type: Number, required: true },
  prazo: { type: String, required: true },
  status: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now }
})

// inicializar o meu model na collection vaga com o schema vagaModel
const Tarefa = mongoose.model('tarefas', tarefaModel);

module.exports = Tarefa;