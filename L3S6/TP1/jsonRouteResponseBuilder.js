import { URL } from 'url';
import RequestController from './requestController.js'; 

export default class JsonRouteResponseBuilder{

    #response;
    #request;

    constructor(request, response){
        this.#request = request;
        this.#response = response;
    }

    buildResponse(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'application/json');

        const url = new URL(this.#request.url, RequestController.BASE);

        const value = url.searchParams.get('value') || 'value unknown';
        const color = url.searchParams.get('color') || 'color unknown';

        this.#response.write(JSON.stringify({value: value, color: color, date : Date()}));
    }
}