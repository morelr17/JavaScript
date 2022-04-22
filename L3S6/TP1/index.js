import http from "http";
import RequestController from './requestController.js';

// création du serveur
const server = http.createServer(            
    (request, response) => 
    {
        // création et envoi de la réponse
        new RequestController(request, response).handleRequest();
	}
);
// démarrage du serveur sur le port 8080
server.listen(8080);