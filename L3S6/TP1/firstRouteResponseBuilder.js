export default class FirstRouteResponseBuilder{

    #request;
    #response;

    constructor(request, response){
        this.#request = request;
        this.#response = response;
    }

    buildResponse(){
        this.#response.statusCode = 200;
        this.#response.setHeader( 'Content-Type' , 'text/html');

        this.#response.write('<html>');

        this.#response.write('<head>');
        this.#response.write('</head>');

        this.#response.write('<body>');
        this.#response.write('<h1>My First server</h1>');
        this.#response.write(`<p>Welcome to the <strong> First </strong> server </p>`);

        this.#response.write('<footer>');
        this.#response.write(Date());
        this.#response.write('</footer>');

        this.#response.write('</body>');

        this.#response.write('</html>');
    }

}