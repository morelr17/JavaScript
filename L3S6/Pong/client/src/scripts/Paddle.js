import Mobile from './Mobile.js';
import MoveState from './MoveState.js';
import imgSrc from '../images/paddle.png';

export default class Paddle extends Mobile {

    constructor(x,y){
        super(x,y,imgSrc);
        this.moving = MoveState.NONE;
        this.score = 0;
    }

    /**
     *@return the states of moving, Up for this fonction 
     */
    get up(){
        return this.moving === MoveState.UP;
    }

    /**
     *@return the states of moving, Down for this fonction 
     */
    get down(){
        return this.moving === MoveState.DOWN;
    }

    /**
     * Move the mobile upwards
     */
    moveUp(){
        this.deltaY = - 8;
        this.moving = MoveState.UP;
    }

    /**
     * Move the mobile down 
     */
    moveDown(){
        this.deltaY = + 8;
        this.moving = MoveState.DOWN;

    }
    
    /**
     * Move the mobile in canvas 
     * @param {Canvas} canvas 
     */
    move(canvas){
        //console.log(MoveState.DOWN);
        if (this.moving === MoveState.UP){
            this.y = Math.max(0, this.y + this.deltaY);
        }
        if(this.moving === MoveState.DOWN){
            this.y = Math.min(canvas.height - this.height, this.y + this.deltaY)
        }
    }

    /**
     * the mobile don't moove 
     */
    stopMoving() {
        this.moving = MoveState.NONE;
    }


}
