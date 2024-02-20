const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const server = express();
server.use(cors());



//conexion con la BD
async function getConnection () {
    const connection = await mysql.createConnection({
        host: 'sql.freedb.tech',
        user: 'freedb_adminmolones',
        password: 'VBpAE7%H#!TT4Az',
        database: 'freedb_proyectosmolones'
    });
    connection.connect();
    return connection;
}


const port = 5001;
server.listen(port, () => {
	console.log(`El servidor se está ejecutando en el puerto ${port}`);
});

server.get('/api/getprojects', async (req, res) => {
    const conection = await getConnection();
    const sql = 'SELECT autor.*, project.* FROM autor, project WHERE autor.idAutor=project.fk_autor';
    const [results, fields] = await conection.query(sql); 
    console.log(results);
    console.log(fields);
    conection.end();
    res.json({success: true, data: results})
});


const staticServer = './web/dist';
server.use(express.static(staticServer));
