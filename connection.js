
const { Client } = require('pg');
var express = require('express');
require('dotenv').config();
const app = express();


app.use(express.urlencoded({ extended: true }))
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432,
  });
client.connect();

app.use(express.static(__dirname + "/public/")); 


app.post('/add',
 (req, res) => {
    client.query('INSERT INTO pacientes (id, nombre, numid) VALUES(DEFAULT, $1, $2)', [req.body.n, req.body.numid],
            (e, r) => {
              console.log(e);
              res.send('INSERTADO'); });
    }
);

//UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;
app.post('/update',
 (req, res) => {
    client.query('UPDATE pacientes SET nombre = $1, numid = $2 WHERE id = $3', [req.body.n, req.body.numid, req.body.i],
            (e, r) => {
              console.log(req.body);
              res.send('ACTUALIZADO'); });
    }
);


app.post('/total',
 (req, res) => {
   var data =  client.query('SELECT * FROM pacientes' ,
            (e, r) => {
              console.log(r.rows);
              res.send(r.rows); });
    }
);



app.post('/read',
 (req, res) => {
   var data =  client.query('SELECT * FROM pacientes WHERE id=$1', [req.body.i],
            (e, r) => {
              console.log(r.rows);
              res.send(r.rows); });
    }
);



app.post('/delete',
 (req, res) => {
    client.query('DELETE FROM pacientes WHERE id = $1', [req.body.i],
            (e, r) => {
              console.log(e);
              res.send('BORRADO'); });
    }
);
const PORT = 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));