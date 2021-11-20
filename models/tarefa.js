
const mongoose = require('mongoose');


const tarefaModel = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: Number, required: true },
  prazo: { type: String, required: true },
  status: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now }
})


const Tarefa = mongoose.model('tarefas', tarefaModel);

module.exports = Tarefa;