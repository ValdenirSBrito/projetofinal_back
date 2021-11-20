
const mongoose = require('mongoose');


const Conn = () => {
  	mongoose.connect('mongodb://localhost:27017/tarefas', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('MongoDB Conectado')
    }).catch(err => console.log('erro de conexao com o banco', err));
}

module.exports = Conn;