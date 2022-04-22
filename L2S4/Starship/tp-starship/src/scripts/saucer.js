import  theGame  from './game.js';
import Mobile from './mobile';
import imgSrc from '../assets/images/flyingSaucer-petit.png';

export default class Saucer extends Mobile{

    constructor(x,y){
        super(x,y,-3,0,imgSrc);
        this.drop = false;
    }
    /**
     * Create a Shoot 
     */
    shootD(){
        this.deltaX = null;
        this.deltaY = +3;
        this.drop = true;

    }

}