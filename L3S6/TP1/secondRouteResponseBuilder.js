export default class SecondRouteResponseBuilder{

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
        this.#response.write('<link href="./public/style/style.css" rel="stylesheet" type="text/css">');
        this.#response.write('</head>');

        this.#response.write('<body>');
        this.#response.write('<h1 class="ok">My Second server</h1>');
        this.#response.write(`<p>Welcome to the <strong> Second </strong> server </p>`);
        this.#response.write('<img src="./public/img/timoleon_oceanie.jpg" alt="timoleon bien sur"></img>');
        this.#response.write('<footer>');
        this.#response.write(Date());
        this.#response.write('</footer>');
        
        this.#response.write('</body>');

        this.#response.write('</html>');
    }

}