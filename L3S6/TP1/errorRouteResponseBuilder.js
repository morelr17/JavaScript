export default class ErrorResponseBuilder{

    #request;
    #response;

    constructor(request,response){
        this.#response = response;
        this.#request = request;
    }

    buildResponse(){
        this.#response.statusCode = 404;
        this.#response.setHeader( 'Content-Type' , 'text/plain');

        this.#response.write('404 : page ' + this.#request.url  +' not found');
    }
}