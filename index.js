const express = require('express');
const cors = require('cors');
// importa arquivo de conexao para acesso ao metodo
const Conn = require('./conn/conn');

const TarefasRouter = require('./routes/tarefas.routes');
const UserRouter = require('./routes/user.routes');

const app = express();
app.use(express.json());
app.use(cors());

// falo pro express ultizar as minhas rotas para o endpoint /vagas
app.use('/tarefas', TarefasRouter);
app.use('/user', UserRouter);

// chamo o metodo para conexao com o banco de dados
Conn();

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})