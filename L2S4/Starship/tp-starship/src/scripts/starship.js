import Mobile from './mobile';
import MoveState from './movestate.js';
import imgSrc from '../assets/images/vaisseau-ballon-petit.png';
//import  theGame  from './game.js';
export default class Starship extends Mobile {
    constructor(x,y){
        super(x,y,0,8,imgSrc);
        this.moving = MoveState.NONE;

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