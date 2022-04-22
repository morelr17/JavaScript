import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas){
    this.canvas=canvas;
    this.ball=[];
    this.request=null;
    this.context=this.canvas.getContext("2d");
  }

  moveAndDraw(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.forEach(element =>{
    element.move(this.canvas);
    element.draw(this.context);
    })
   //const raf = window.requestAnimationFrame(this.moveAndDraw());
    this.request = window.requestAnimationFrame(() => {this.moveAndDraw()});
  }

  
  /* start the animation or stop it if previously running */
  startAndStop() {
    
    if(this.request === null){
      this.request = window.requestAnimationFrame(() => {this.moveAndDraw()});
    }

    else{
      window.cancelAnimationFrame(this.request);
      this.request = null;
    }
  }

  alea(n){
    return Math.floor(n*(Math.random()));
  }

  aleaDelta(){
    let alea=Math.random();
    if(alea>0.5){
      return(this.alea(4)+1);
    }
    else{
      return -((this.alea(4))+1);
    }
  }

  addBall(){
    let x=this.alea(this.canvas.width);
    let y=this.alea(this.canvas.height);
    let deltaX=this.aleaDelta();
    let deltaY=this.aleaDelta();
    this.ball.push(new Ball(x,y,deltaX,deltaY));
  }
}
