export default class RandomRouteResponseBuilder{

    #request;
    #response;
    
    constructor(request, response){
        this.#request = request;
        this.#response = response;
    }

    buildResponse(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'application/json');

        this.#response.write(JSON.stringify({randomValue: Math.floor(Math.random() * 100)}));
    }
}