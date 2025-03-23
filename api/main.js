const express = require('express');
const app = express();

const user1 = [{name: "Maria Jose", lastName: "Palomino Carreño", email: "mariapalca@unisabana.edu.co", id: "0000321271"}];
const user2 = [{name: "Samuel", lastName: "Guerrero Arcos", email: "samuelguar@unisabana.edu.co", id: "0000323500"}];

app.get('/user-info/:id', (req, res) => { //funcion callback 
    const id = parseInt(req.params.id); //para convertir el parametro que es string a un integer 
    
    if (id === 1) { //usamos una comparacion estricta 
        res.json(user1); //.json para retorar un archivo .json
    } else if (id === 2) {
        res.json(user2);
    } else {
        res.status(404).json({error:"404 Usuario no encontrado"});
    }
});

module.exports = app; // cambio para que funciones en vercel