const express = require('express');
const app = express();

const user1 = [{nombres: "Maria Jose", apellidos: "Palomino Carreño", email: "mariapalca@unisabana.edu.co", id: "0000321271"}];
const user2 = [{nombres: "Samuel", apellidos: "Guerrero Arcos", email: "nose@unisabana.edu.co", id: "0000nose"}];

app.get('/user-info/1', (req, res) => {
    res.json(user1);
});

app.get('/user-info/2', (req, res) => {
    res.json(user2);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });