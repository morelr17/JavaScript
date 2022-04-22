(()=>{"use strict";var t={d:(i,s)=>{for(var e in s)t.o(s,e)&&!t.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:s[e]})}};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var i;t.g.importScripts&&(i=t.g.location+"");var s=t.g.document;if(!i&&s&&(s.currentScript&&(i=s.currentScript.src),!i)){var e=s.getElementsByTagName("script");e.length&&(i=e[e.length-1].src)}if(!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=i+"../"})(),t.d({},{Bm:()=>r,t:()=>c,bG:()=>l});class i{constructor(t,i,s,e=0,h=0){this.y=i,this.x=t,this.img=new Image,this.img.src=s,this.shiftX=e,this.shiftY=h}get width(){return this.img.width}get height(){return this.img.height}move(){this.x=this.x+this.shiftX,this.y=this.y+this.shiftY}draw(t){t.drawImage(this.img,this.x,this.y)}stopMoving(){this.shiftX=0,this.shiftY=0}}class s extends i{constructor(t,i,s){super(t,i,"./images/balle24.png",4,2),this.theGame=s}reset(){this.shiftX=4,this.shiftY=2}move(){(this.y<=0||this.y+this.height>=this.theGame.canvas.height)&&(this.shiftY=-this.shiftY),super.move()}colisionWith(t){t.x<this.x+this.width&&t.x+t.width>this.x&&t.y<this.y+this.height&&t.y+t.height>this.y&&(this.moveCollisionObject(t),this.theGame.socket.emit("colision",this.x,this.y,this.shiftX,this.shiftY))}moveCollisionObject(t){t.y<this.y&&t.y+t.height/10>this.y&&(this.shiftY=4,this.shiftX>0?this.shiftX=-3:this.shiftX=3),t.y+t.height/10<this.y&&t.y+t.height/10*2>this.y&&(this.shiftY=3,this.shiftX>0?this.shiftX=-4:this.shiftX=4),t.y+t.height/10*2<this.y&&t.y+t.height/10*3>this.y&&(this.shiftY=2,this.shiftX>0?this.shiftX=-5:this.shiftX=5),t.y+t.height/10*3<this.y&&t.y+t.height/10*4>this.y&&(this.shiftY=1,this.shiftX>0?this.shiftX=-6:this.shiftX=6),t.y+t.height/10*4<this.y&&t.y+t.height/10*6>this.y&&(this.shiftY=0,this.shiftX>0?this.shiftX=-7:this.shiftX=7),t.y+t.height/10*6<this.y&&t.y+t.height/10*7>this.y&&(this.shiftY=-1,this.shiftX>0?this.shiftX=-6:this.shiftX=6),t.y+t.height/10*7<this.y&&t.y+t.height/10*8>this.y&&(this.shiftY=-2,this.shiftX>0?this.shiftX=-5:this.shiftX=5),t.y+t.height/10*8<this.y&&t.y+t.height/10*9>this.y&&(this.shiftY=-3,this.shiftX>0?this.shiftX=-4:this.shiftX=4),t.y+t.height/10*9<this.y&&t.y+t.height/10*10>this.y&&(this.shiftY=-4,this.shiftX>0?this.shiftX=-3:this.shiftX=3)}}const e=0,h=1,a=2,n=t.p+"images/paddle.png";class o extends i{constructor(t,i){super(t,i,n),this.moving=a,this.score=0}get up(){return this.moving===e}get down(){return this.moving===h}moveUp(){this.deltaY=-8,this.moving=e}moveDown(){this.deltaY=8,this.moving=h}move(t){this.moving===e&&(this.y=Math.max(0,this.y+this.deltaY)),this.moving===h&&(this.y=Math.min(t.height-this.height,this.y+this.deltaY))}stopMoving(){this.moving=a}}class d{constructor(t){this.raf=null,this.canvas=t,this.ball=new s(this.canvas.width/2,this.canvas.height/2,this),this.paddleG=new o(10,this.canvas.height/2-50),this.paddleD=new o(this.canvas.width-40,this.canvas.height/2-50,this)}start(){this.initBall(),this.animate()}initBall(){this.ball=new s(this.paddleG.x+this.paddleG.width,this.paddleG.y+this.paddleG.height/2,this)}isAtLeft(t){return t.x<=0}isAtRight(t){return t.x>=this.canvas.width-25}stop(){this.ball.stopMoving(),this.ball=null,window.cancelAnimationFrame(this.raf)}animate(){this.moveAndDraw(),this.raf=window.requestAnimationFrame(this.animate.bind(this))}moveAndDraw(){const t=this.canvas.getContext("2d");if(t.clearRect(0,0,this.canvas.width,this.canvas.height),this.paddleD.move(this.canvas),this.paddleD.draw(t),this.paddleG.move(this.canvas),this.paddleG.draw(t),!0===l){this.ball.move(),this.ball.draw(t),this.ball.colisionWith(this.paddleG),this.ball.colisionWith(this.paddleD);let i=this.isAtLeft(this.ball),s=this.isAtRight(this.ball);(i||s)&&(i?this.paddleG.score+=1:s&&(this.paddleD.score+=1),c(this),this.socket.send("stop"))}}keyDownActionHandler(t){switch(t.key){case"ArrowDown":this.socket.send("playerDown");break;case"ArrowUp":this.socket.send("playerUp")}t.preventDefault()}keyUpActionHandler(t){switch(t.key){case"ArrowUp":case"ArrowDown":this.socket.send("stopPlayer");break;default:return}t.preventDefault()}updateBall(t,i,s,e){this.ball.x=t,this.ball.y=i,this.ball.shiftX=s,this.ball.shiftY=e}onReceive(){this.socket.on("colision",((t,i,s,e)=>{this.updateBall(t,i,s,e)})),this.socket.on("stop",(()=>{c(this)})),this.socket.on("paddleG",(t=>{this.paddleG=new o(10,t)})),this.socket.on("paddleD",(t=>{this.paddleD=new o(this.canvas.width-40,t)})),this.socket.on("message",(t=>{switch(t){case"ready":document.getElementById("start").disabled=!1,this.socket.emit("paddleG",this.paddleG.y);break;case"play":c(this);break;case"client disconnected":document.getElementById("start").disabled=!0,document.getElementById("connexion").value="Connexion",r=!1,this.paddleG.score=0,this.paddleD.score=0,this.socket.disconnect();break;case"player1Down":this.paddleG.moveDown();break;case"player1Up":this.paddleG.moveUp();break;case"stopPlayer1":this.paddleG.stopMoving();break;case"player2Down":this.paddleD.moveDown();break;case"player2Up":this.paddleD.moveUp();break;case"stopPlayer2":this.paddleD.stopMoving();break;case"First Player":this.paddleG=new o(10,this.canvas.height/2-50),this.animate(),this.displayMessage(t);break;case"Second Player":this.paddleD=new o(this.canvas.width-40,this.canvas.height/2-50,this),this.socket.emit("paddleD",this.paddleD.y),this.animate(),this.displayMessage(t);break;default:this.displayMessage(t)}}))}displayMessage(t){document.getElementById("player").innerHTML=t}connectSocket(){this.socket=io(),this.onReceive()}disconnectSocket(){this.socket.send("deconnection")}}window.addEventListener("load",(()=>{const t=document.getElementById("field"),i=new d(t);document.getElementById("start").addEventListener("click",(()=>{c(i),i.socket.send("start")})),document.getElementById("connexion").addEventListener("click",(()=>y(i))),window.addEventListener("keydown",i.keyDownActionHandler.bind(i)),window.addEventListener("keyup",i.keyUpActionHandler.bind(i))}));let l=!1;const c=t=>{l?(document.getElementById("start").value="start",t.stop()):(t.start(),document.getElementById("start").value="stop"),l=!l,document.getElementById("joueur1").value=t.paddleD.score,document.getElementById("joueur2").value=t.paddleG.score};let r=!1;const y=t=>{r?(t.disconnectSocket(),document.getElementById("connexion").value="Connexion"):(t.connectSocket(),document.getElementById("connexion").value="Deconnexion"),r=!r}})();