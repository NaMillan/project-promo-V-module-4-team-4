const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());

const port = 5001;

server.listen(port, () => {
	console.log(`El servidor se está ejecutando en el puerto ${port}`);
});
const staticServer = './web/dist';
server.use(express.static(staticServer));
