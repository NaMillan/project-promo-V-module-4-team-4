const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');
//conexion con la BD
async function getConnection() {
	const connection = await mysql.createConnection({
		host: 'sql.freedb.tech',
		user: 'freedb_adminmolones',
		password: 'VBpAE7%H#!TT4Az',
		database: 'freedb_proyectosmolones',
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
	const sql =
		'SELECT autor.*, project.* FROM autor, project WHERE autor.idAutor=project.fk_autor';
	const [results, fields] = await conection.query(sql);
	console.log(results);
	console.log(fields);
	conection.end();
	res.json({ success: true, data: results });
});

server.post('/api/addProject', async (req, res) => {
	const connection = await getConnection();
	console.log(req.body);
	if (req.body.name === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	
	} else if (req.body.slogan === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.technologies === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.repo === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.demo=== '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.desc === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.autor === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.job === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.image === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	} else if (req.body.photo === '') {
		res.json({
			success: false,
			mjs: 'Error',
		});
	
	
	} else {
		const insertAuthor =
			'Insert into autor (nameAutor, job, photoAutor) values (?, ?, ?)';
		const [resultAuthor] = await connection.query(insertAuthor, [
			req.body.autor,
			req.body.job,
			req.body.photo,
		]);
		const lastInsertAuthor = resultAuthor.insertId;
		const insertProject =
			'Insert into project (nameProject, slogan, technologies, repo, demo, `desc`, photoProject, fk_autor) values (?, ?, ?, ?, ?, ?, ?, ?)';
		const [resultProject] = await connection.query(insertProject, [
			req.body.name,
			req.body.slogan,
			req.body.technologies,
			req.body.repo,
			req.body.demo,
			req.body.desc,
			req.body.image,
			lastInsertAuthor,
		]);
		res.json({
			//Aquí usar la misma estructura que tenemos en el front
			success: true,
			cardURL: `http://localhost:5001/detail/${resultProject.insertId}`,
		});
	}
});

server.get('/detail/:id', async (req, res) => {
	const { id } = req.params;
	const selectProjectId = `SELECT * FROM project, autor WHERE project.fk_autor = autor.idAutor and project.idProject = ?`;
	const conex = await getConnection();
	const [resultProject] = await conex.query(selectProjectId, [id]);
	res.render('detail', { project: resultProject[0] });
});
const staticServer = './src/public-react';
server.use(express.static(staticServer));
const staticServerImages = './src/public-images';
server.use(express.static(staticServerImages));
const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));
