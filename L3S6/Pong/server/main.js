import http from 'http';
import RequestController from './controllers/requestController.js';
import IOController from './controllers/IOController.js';
import { Server as IOServer } from 'socket.io';

const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);


const io = new IOServer(server);
const ioController = new IOController(io); 

// au moment où le client demande la connexion
io.on('connection', (socket) => ioController.register(socket));

server.listen(8085);
