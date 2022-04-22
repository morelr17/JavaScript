
import Animation from './animation';
import Ball from './ball';
export default class AnimationWithObstacle extends Animation{
    constructor(canvas,obstacle){
        super(canvas);
        this.ball = [];
        this.request = null;
        this.obstacle = obstacle;
        
    }

    moveAndDraw(){
        
        
        const context = this.canvas.getContext('2d');
        this.ball.forEach(ball => ball.move(this.canvas));
        this.obstacle.move(this.canvas);
        context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.obstacle.draw(context);
        this.ball = this.ball.filter(a => !(a.collisionWith(this.obstacle)));
        this.ball.forEach(b => b.draw(context));
        this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));
        
    }
    
    keyDownActionHandler(event) {
        switch (event.key) {
           /* case "ArrowLeft":
            case "Left":
                this.obstacle.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.obstacle.moveRight();
                break;*/
                
            case "ArrowUp":
            case "Up":
                this.obstacle.moveUp();
                break;
            case "ArrowDown":
            case "Down" :
                this.obstacle.moveDown();
                break;
            default: return;
        }
        event.preventDefault();
     }
     keyUpActionHandler(event) {
        switch (event.key) {
           /* case "ArrowLeft":
            case "Left":
            case "ArrowRight":
            case "Right":*/
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.obstacle.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
   

}