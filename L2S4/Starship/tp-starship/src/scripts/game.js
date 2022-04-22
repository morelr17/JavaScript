import Mobile from './mobile';
import MoveState from './movestate';
import Starship from './starship';
import Saucer from './saucer';
import Shoot from './shoot';

class Game{
    constructor(){
        this.canvas = document.getElementById("stars");
        this.context = this.canvas.getContext("2d");
        this.playerShip = new Starship(40,this.canvas.height/2);
        this.saucerTab = [];
        this.shootTab = [];
        this.score = 0;
        this.flotte=false;
        this.request=null;
    }

    /**
     * manages all movement of objects
     */
    moveAndDraw(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.playerShip.move(this.canvas);
        this.playerShip.draw(this.context);
        this.saucerTab.forEach(saucer=>{
            saucer.move(this.canvas);
            saucer.draw(this.context);
        });
        this.saucerTab.forEach(s => {
            const Left = this.IsSaucerInLeft(s);
            if(Left){
		this.DeleteSaucer(s);
		this.addScore(-1000);
            }
	    });
        this.shootTab.forEach(shoot=>{
            shoot.move(this.canvas);
            shoot.draw(this.context);
        });
        this.shootTab.forEach(s => {
            const CheckSaucer = s.checkIfIsCollisions(this.saucerTab);
            if(CheckSaucer){
                CheckSaucer.shootD();
                this.shootTab.splice(this.shootTab.indexOf(s), 1);
                this.addScore(200);
            }
        })
        requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    /**
     * attribute one event when the key of keyboard is down 
     * @param {event} event 
     * @returns 
     */
    keyDownActionHandler(event) {
        switch (event.key) {   
            case "ArrowUp":
            case "Up":
                this.playerShip.moveUp();
                break;
            case "ArrowDown":
            case "Down" :
                this.playerShip.moveDown();
                break;
            case " ":
                this.addShoot();
                break;
            default: return;
        }
        event.preventDefault();
     }

     /**
      * Stop the mouvement when the keyboard key is up
      */
     keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.playerShip.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();

    }

    /**
     * 
     * @param {Int} n the limit of the alea 
     * @returns Int random between 0 and n 
     */
    alea(n){
        return Math.floor(n*(Math.random()));
    }


    /**
     * AddSaucer in canvas 
     */
    addSaucer(){
        const y = this.alea(this.canvas.height - 30 );
        const x = this.canvas.width; 
        const saucer = new Saucer(x, y);
        this.saucerTab.push(saucer); 
    }

    /**
     * create shoot 
     */
    addShoot(){
        const x = this.playerShip.x + 45; 
        const y = this.playerShip.y + 10; 
        let shoot = new Shoot(x,y);
        this.shootTab.push(shoot);
   }
    /**
     * add point on the score 
     * @param {Int} score 
     */
    addScore(score){
        this.score += score;
        document.getElementById("score").innerHTML = this.score;
    }

    /**
     * @param {Saucer} saucer 
     * @returns True if Saucer go out in left part 
     */
    IsSaucerInLeft(saucer){
        if(saucer.x <= 0){
                return true;
        }
            else{
                return false;
        }
    }

    /**
     * Delete the saucer of the canvas 
     * @param {Saucer} saucer 
     */
    DeleteSaucer(saucer){
        this.saucerTab.splice(this.saucerTab.indexOf(saucer),1);
    }

    /**
     * create saucer with probability of 1/2
     */
    flotteSaucers(){
        const i=theGame.alea(2);
        if(i<1){
            theGame.addSaucer();
            document.activeElement.blur();
        }
    }
    
    /**
     * call the fonction flotteSaucer every 750 ms
     */
    startAndStopSaucers() {
    
        if(this.request === null){
          this.request = setInterval(theGame.flotteSaucers,750);;
        }
    
        else{
            window.clearInterval(this.request);
            this.request = null;
        }
      }

}

// crée et exporte l'instance unique de Game
const theGame = new Game();
export default theGame;
