
const { Client } = require('pg');
var express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }))
const client = new Client({
    user: 'xbnwykzk',
    host: 'salt.db.elephantsql.com',
    database: 'xbnwykzk',
    password: 'dWHaA9Hy9Gt0dgmScmXHaJFeJ5A_-0UN',
    port: 5432,
  });
client.connect();

app.use(express.static("public"));



const PORT = 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));