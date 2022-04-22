import Mobile from './mobile.js';
import MoveState from './movestate';
import ImageTir from "../assets/images/tir.png";

export default class Shoot extends Mobile{
    constructor(x,y){
        super(x,y,8,0,ImageTir);

    }

    /**
     * @param {Boolean} mobile the saucer
     * @returns True if the saucer have colision
     */
    isCollision(mobile){
        const w = this.image.width;
        const h = this.image.height; 
        const wm = mobile.image.width; 
        const hm = mobile.image.height; 

        const rect1 = {x : this.x, y : this.y, width : w, height : h};
        const rect2 = {x : mobile.x, y : mobile.y, width : wm, height : hm};

        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
             return true;
         }
         return false;
     
    }

    /**
     * 
     * @param {Array <saucer>} saucerTab 
     * @returns return the saucer who have colision
     */
    checkIfIsCollisions(saucerTab){
		let Sauc = 0;
		saucerTab.forEach(s => {
			if(this.isCollision(s)){
				Sauc = s;
			}
		});
		return Sauc;
	}


}




