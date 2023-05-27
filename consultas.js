const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Bgabriel441685',
    database: 'likeme',
    allowExitOnIdle: true
})

const obtenerPosts = async () => {
    const {rows} = await pool.query("SELECT * FROM posts");
    return rows;
}

const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)";
    const values = [titulo, url, descripcion];
    const result = await pool.query(consulta, values)
}

module.exports = {obtenerPosts, agregarPost};