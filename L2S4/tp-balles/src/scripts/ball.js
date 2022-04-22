
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {
    constructor(x,y,deltaX=3,deltaY=-2){
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image = this.createImage(ballImgSrc);
    }

    static BALL_WIDTH = 48;

    draw(context) {
	context.drawImage(this.image,this.x,this.y)
    }

    move(canvas){
        if((this.x + this.deltaX > canvas.width - Ball.BALL_WIDTH)|(this.x + this.deltaX < 0)){
            this.deltaX = (-this.deltaX);
        }
        if((this.y + this.deltaY>canvas.height - Ball.BALL_WIDTH)|(this.y + this.deltaY < 0)){
            this.deltaY = (-this.deltaY);
        }
        this.x += this.deltaX;
        this.y += this.deltaY;
    }


    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage(source) {
  	const ballImg = new Image();
	ballImg.width = Ball.BALL_WIDTH;
	ballImg.src = source;
	return ballImg;
    }

    collisionWith(obstacle){
        let p1x=Math.max(this.x,obstacle.x);
        let p1y=Math.max(this.y,obstacle.y);
        let p2x=Math.min(this.x+Ball.BALL_WIDTH,obstacle.x+obstacle.width);
        let p2y=Math.min(this.y+Ball.BALL_WIDTH,obstacle.y+obstacle.height);
        return p1x<p2x & p1y<p2y;
    }

}

