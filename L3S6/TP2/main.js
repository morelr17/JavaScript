import http from 'http';
import RequestController from './controllers/requestController.js';
import { Server as IOServer } from 'socket.io';

const MIN = 2;
const MAX = 8;


const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);


// Evenement de connection d'un client au serveur
const connectionListener = socket => {
	console.log('Connection done');
	// Envoi du ping toutes les 2 secondes
	setInterval(() => {
		socket.volatile.emit('ping', Math.floor(Math.random() * ((MAX + 1) - MIN)) + MIN);
	  }, 2000);
}

const io = new IOServer(server);
io.on('connection', connectionListener);

server.listen(8080);
