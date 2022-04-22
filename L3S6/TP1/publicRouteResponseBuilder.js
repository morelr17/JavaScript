import fs from 'fs';
import RequestController from './requestController.js';
 

export default class PublicRouteResponseBuilder{

    #request;
    #response;

    constructor(request, response){
        this.#request = request;
        this.#response = response;
    }

    buildResponse(){


        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'text/plain');

        const path =  '.'+this.#request.url;

        try {
            fs.accessSync(path);
            const reading = fs.readFileSync(path);
            this.#response.write(reading);
        }
        catch(error){
            console.error('File cannot be read');
        }

    }

}