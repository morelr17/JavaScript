import http from 'http';
import RequestController from './controllers/requestController.js';
import { Server as IOServer } from 'socket.io';

const MAX_PLAYER = 2;


const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);


// Evenement de connection d'un client au serveur
const connectionListener = socket => {
    /*Gérer ici la connexion*/
	console.log('Connection done');
	setInterval(() => {
		socket.volatile.emit('ping', /*ce qu'on envoie*/);
	  }, /*quand*/);
}

const io = new IOServer(server);
io.on('connection', connectionListener);

server.listen(8085);
