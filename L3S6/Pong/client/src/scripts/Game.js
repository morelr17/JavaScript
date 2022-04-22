import Ball from './Ball.js';
import Paddle from './Paddle.js';
import { startGame, connected, started } from './pong.js';


/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {

  /**
   * build a Game
   *
   * @param  {Canvas} canvas the canvas of the game
   */
  constructor(canvas) {
    this.raf = null;
    this.canvas = canvas;
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, this);
    this.paddleG = new Paddle(10,this.canvas.height/2-50);
    this.paddleD = new Paddle(this.canvas.width -40, this.canvas.height/2 - 50, this);
  }

  /** start this game animation */
  start() {
    this.initBall();
    this.animate();
  }

  initBall(){
    this.ball = new Ball(this.paddleG.x + this.paddleG.width , this.paddleG.y + this.paddleG.height/2, this);
  }

  /**
   * return True if the ball is at the left limit of the field
   * @param {*} ball 
   * @returns True if the ball is at the left limit of the field
   */
  isAtLeft(ball){
    return ball.x <= 0;
  }

  /**
   * return True if the ball is at the right limit of the field
   * @param {*} ball 
   * @returns True f the ball is at the right limit of the field
   */
  isAtRight(ball){
    return ball.x >= this.canvas.width -25;
  }

  /** stop this game animation */
  stop() {
    this.ball.stopMoving();
    this.ball = null;
    window.cancelAnimationFrame(this.raf);
  }

  /** animate the game : move and draw */
  animate() {
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }

  /** move then draw the bouncing ball */
  moveAndDraw() {
    const ctxt = this.canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.paddleD.move(this.canvas);
    this.paddleD.draw(ctxt);
    this.paddleG.move(this.canvas);
    this.paddleG.draw(ctxt);
    
    // draw and move the ball
    if (started === true){
      this.ball.move();
      this.ball.draw(ctxt);
      
      this.ball.colisionWith(this.paddleG);
      this.ball.colisionWith(this.paddleD);

      let isAtLeft = this.isAtLeft(this.ball);
      let isAtRight = this.isAtRight(this.ball);

      if(isAtLeft || isAtRight){
        if(isAtLeft){
          this.paddleG.score += 1;
        }
        else if(isAtRight){
          this.paddleD.score += 1;
        }
        startGame(this);
        this.socket.send("stop");
      }
    }
  }


  /**
   * Move the paddle when you press the directional button
   * @param {*} event 
   * @returns 
   */
  keyDownActionHandler(event) {
    switch (event.key) {
        case "ArrowDown":
            this.socket.send('playerDown');
            break;
        case "ArrowUp":
            this.socket.send('playerUp');
            break;
    }
    event.preventDefault();
 }

  /**
   * Stop the paddle when you unpress the directional button
   * @param {*} event  
   */
  keyUpActionHandler(event) {
    switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":
            this.socket.send("stopPlayer");
            break;
        default: return;
    }
    event.preventDefault();
  }
  /**
   * update the position of the ball 
   * @param {*} x 
   * @param {*} y 
   * @param {*} shiftX 
   * @param {*} shiftY 
   */
  updateBall(x,y,shiftX,shiftY){
    this.ball.x = x;
    this.ball.y = y;
    this.ball.shiftX = shiftX;
    this.ball.shiftY = shiftY;
  }

  /**
   * Do a specific action when receiving the message send by the server
   */
  onReceive() {
    this.socket.on('colision',(x,y,shiftX,shiftY) => {
      this.updateBall(x,y,shiftX,shiftY);
    });

    this.socket.on('stop',() => {
      startGame(this);
    });

    this.socket.on('paddleG',(y) => {
      this.paddleG = new Paddle(10,y);
    });

    this.socket.on('paddleD',(y) => {
      this.paddleD = new Paddle(this.canvas.width -40,y);
    });

    this.socket.on('message', message => {
      switch (message){
        case "ready":
          document.getElementById("start").disabled = false;
          this.socket.emit("paddleG",this.paddleG.y);
          break;
        case "play":
          startGame(this);
          break;
        case "client disconnected":
          document.getElementById("start").disabled = true;
          document.getElementById("connexion").value = "Connexion";
          connected = false;
          this.paddleG.score = 0;
          this.paddleD.score = 0;
          this.socket.disconnect();
          break;
        case "player1Down":
          this.paddleG.moveDown();
          break;
        case "player1Up":
          this.paddleG.moveUp();
          break;
        case "stopPlayer1":
          this.paddleG.stopMoving();
          break;
        case "player2Down":
          this.paddleD.moveDown();
          break;
        case "player2Up":
          this.paddleD.moveUp();
          break;
        case "stopPlayer2":
          this.paddleD.stopMoving();
          break;
        case "First Player":
          this.paddleG = new Paddle(10,this.canvas.height/2-50);
          this.animate();
          this.displayMessage(message);
          break;
        case "Second Player":
          this.paddleD = new Paddle(this.canvas.width -40, this.canvas.height/2 - 50, this);
          this.socket.emit("paddleD",this.paddleD.y);
          this.animate();
          this.displayMessage(message);
          break;
        default:
          this.displayMessage(message);
      }
    });
  }

  /**
   * Display the message at the top of the page
   * @param {*} message 
   */
  displayMessage(message) {
    document.getElementById('player').innerHTML = message;
  }

  /**
   * Send a message to the server to advertising that somebody want to be connected to the game
   */
  connectSocket(){
    this.socket = io();
    this.onReceive();
  }

  /**
   * Send a message to the server to advertising that somebody want to quit the game
   */
  disconnectSocket(){
    this.socket.send('deconnection');
  }

}
