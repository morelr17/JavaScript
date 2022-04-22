import Mobile from './Mobile.js';

// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 4;
const SHIFT_Y = 2;


/**
 * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Ball extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
  }
  /**
   * reset the shift of the ball
   */
  reset(){
    this.shiftX = SHIFT_X;
    this.shiftY = SHIFT_Y;
  }

  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
  move() {
    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    }
    super.move();
  }

  /**
   * 
   * @param {*} obstacle 
   */
  colisionWith(obstacle){
    
      if ( obstacle.x < this.x + this.width &&
        obstacle.x + obstacle.width > this.x &&
        obstacle.y < this.y + this.height &&
        obstacle.y + obstacle.height > this.y) {
          this.moveCollisionObject(obstacle);
          this.theGame.socket.emit('colision', this.x, this.y, this.shiftX, this.shiftY);
      }
      
  }
      
  /**
   * 
   * @param {*} obstacle 
   */
  moveCollisionObject(obstacle){


    if (obstacle.y < this.y && obstacle.y + (obstacle.height/10) > this.y){
      this.shiftY = 4;
      if (this.shiftX > 0) {
        this.shiftX = -3;
      }
      else { this.shiftX = 3;}
    }
    if (obstacle.y + obstacle.height/10 < this.y && obstacle.y + (obstacle.height/10)*2 > this.y){
      this.shiftY = 3;
      if (this.shiftX > 0) {
        this.shiftX = -4;
      }
      else { this.shiftX = 4;}
    }
    if (obstacle.y + (obstacle.height/10)*2 < this.y && obstacle.y + (obstacle.height/10)*3 > this.y){
      this.shiftY = 2;
      if (this.shiftX > 0) {
        this.shiftX = -5;
      }
      else { this.shiftX = 5;}
    }
    if (obstacle.y + (obstacle.height/10)*3 < this.y && obstacle.y + (obstacle.height/10)*4 > this.y){
      this.shiftY = 1;
      if (this.shiftX > 0) {
        this.shiftX = -6;
      }
      else { this.shiftX = 6;}
    }
    if (obstacle.y + (obstacle.height/10)*4 < this.y && obstacle.y + (obstacle.height/10)*6 > this.y){
      this.shiftY = 0;
      if (this.shiftX > 0) {
        this.shiftX = -7;
      }
      else { this.shiftX = 7;}
    }
    if (obstacle.y + (obstacle.height/10)*6 < this.y && obstacle.y + (obstacle.height/10)*7 > this.y){
      this.shiftY = -1;
      if (this.shiftX > 0) {
        this.shiftX = -6;
      }
      else { this.shiftX = 6;}
    }
    if (obstacle.y + (obstacle.height/10)*7 < this.y && obstacle.y + (obstacle.height/10)*8 > this.y){
      this.shiftY = -2;
      if (this.shiftX > 0) {
        this.shiftX = -5;
      }
      else { this.shiftX = 5;}
    }
    if (obstacle.y + (obstacle.height/10)*8 < this.y && obstacle.y + (obstacle.height/10)*9 > this.y){
      this.shiftY = -3;
      if (this.shiftX > 0) {
        this.shiftX = -4;
      }
      else { this.shiftX = 4;}
    }
    if (obstacle.y + (obstacle.height/10)*9 < this.y && obstacle.y + (obstacle.height/10)*10 > this.y){
      this.shiftY = -4;
      if (this.shiftX > 0) {
        this.shiftX = -3;
      }
      else { this.shiftX = 3;}
    }
    }
  
}

