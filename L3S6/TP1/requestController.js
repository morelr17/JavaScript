import { URL } from 'url';
import FirstRouteResponseBuilder from './firstRouteResponseBuilder.js';
import SecondRouteResponseBuilder from './secondRouteResponseBuilder.js';
import JsonRouteResponseBuilder from './jsonRouteResponseBuilder.js';
import ErrorRouteResponseBuilder from './errorRouteResponseBuilder.js';
import RandomRouteResponseBuilder from './randomRouteResponseBuilder.js';
import PublicRouteResponseBuilder from './publicRouteResponseBuilder.js';

export default class RequestController {

  static BASE = 'http://localhost/';

  #request;
  #response;

  constructor(request, response) {
    this.#request = request;
    this.#response = response;
  }

  get response() {
    return this.#response;
  }

  handleRequest() {
    const url = new URL(this.#request.url, RequestController.BASE)
    const path = url.pathname;
    this.route(path,this.#request, this.#response);
    this.#response.end();
  }

  route(path, request, response) {
    if (path == '/first')
      new FirstRouteResponseBuilder(request,response).buildResponse();
    else if (path == '/second')
      new SecondRouteResponseBuilder(request,response).buildResponse();
    else if (path == '/json')
      new JsonRouteResponseBuilder(request,response).buildResponse();
    else if (path == '/random')
      new RandomRouteResponseBuilder(request,response).buildResponse();
    else if (path.startsWith('/public'))
      new PublicRouteResponseBuilder(request, response).buildResponse();
    else{
      new ErrorRouteResponseBuilder(request,response).buildResponse();
    }

  }
}