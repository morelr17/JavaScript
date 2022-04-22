'use strict';

import Game from './Game.js';

const init = () => {
  const theField = document.getElementById("field");
  const theGame = new Game(theField);

  document.getElementById('start').addEventListener("click", () => {
    startGame(theGame);
    theGame.socket.send('start');
  });

  document.getElementById('connexion').addEventListener("click", () => connectGame(theGame));

  window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
  window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
}

window.addEventListener("load",init);


// true if game is started
export let started = false;
/** start and stop a game
 * @param {Game} theGame - the game to start and stop
 */
export const startGame = theGame => {
  if (!started) {
    theGame.start();
    document.getElementById('start').value = 'stop';
  }
  else {
    document.getElementById('start').value = 'start';
    theGame.stop();
  }
  started = ! started;

  document.getElementById('joueur1').value = theGame.paddleD.score;
  document.getElementById('joueur2').value = theGame.paddleG.score;
}

export let connected = false;
/** start and stop a game
 * @param {Game} theGame - the game to start and stop
 */
const connectGame = theGame => {
  if (!connected) {
    theGame.connectSocket();
    document.getElementById('connexion').value = 'Deconnexion';
  }
  else {
    theGame.disconnectSocket();
    document.getElementById('connexion').value = 'Connexion';
    
  }
  connected = ! connected;
}
