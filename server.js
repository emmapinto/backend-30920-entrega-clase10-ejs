/******************** CLASE 10 ********************/
/********* Desafio Entregable: EJS *********/

import express from 'express'
// const express = require("express")

let productos = []

const app = express()

app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('formulario', {productos});
});

app.get('/productos', (req, res) => {
    res.redirect('/')
});

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
});


/*************SERVER LISTEN***********/

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en el servidor ${error}`))

/************************************/
