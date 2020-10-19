
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

app.use(express.static(__dirname + "/public/")); 


app.post('/add',
 (req, res) => {
    client.query('INSERT INTO pacientes (id, nombre, numid) VALUES(DEFAULT, $1, $2)', [req.body.n, req.body.numid],
            (e, r) => {
              console.log(e);
              res.send('OK'); });
    }
);





const PORT = 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));