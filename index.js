const express = require('express');
const cors = require('cors');

const Conn = require('./conn/conn');

const TarefasRouter = require('./routes/tarefas.routes');
const UserRouter = require('./routes/user.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/tarefas', TarefasRouter);
app.use('/user', UserRouter);

Conn();

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})