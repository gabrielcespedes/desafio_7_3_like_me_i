const {obtenerPosts, agregarPost} = require('./consultas.js');

const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3000, console.log("Servidor Encendido"));

app.get("/posts", async (req, res) => {
    const posts = await obtenerPosts();
    res.json(posts);
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    await agregarPost(titulo, url, descripcion);
    res.send("Post agregado con éxito");
})