if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

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


const db_url = process.env.DB_URL;
const db_user = process.env.db_user;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})