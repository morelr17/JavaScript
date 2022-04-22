const MAX_PLAYER = 2;

export default class IOController{

    #io;
    #players;

    /**
     * CONSTRUCTOR
     * @param io
     */
    constructor(io){
        this.#io = io;
        this.#players = [];;
    }
    
    /**
     * Check if the game is full or not
     * @param {*} socket 
     */
    register(socket){
        // check if the game is full or not
        if(this.#players.length < MAX_PLAYER){
            this.setup(socket);
        }
        else{
            this.fullServer(socket);
        }
    }

    /**
     * Leave all the player of the game 
     */
     leaveGame(){
        this.#players.forEach(socket => socket.send("Disconnected"));
        this.#players.splice(0,2);
    }

    /**
     * setup the socket when he come in the game
     * @param {*} socket 
     */
    setup(socket){
        // add the player to the game
        this.#players.push(socket);

        // send the good name for the player
        if(this.#players.length == MAX_PLAYER -1){
            socket.send("First Player");
        }
        else{
            socket.send("Second Player");
            this.#players[0].send('ready');

        }
        this.onReceive(socket);
    }

    /**
     * The comportement when the socket receive a message
     * @param {*} socket 
     */
    onReceive(socket){
        socket.on("colision", (x,y,shiftX,shiftY) => {
            if (this.#players.length == MAX_PLAYER){
               this.#players[1].emit("colision", x,y,shiftX,shiftY);
            }
        });

        socket.on("stop", () => {
            if (this.#players.length == MAX_PLAYER){
               this.#players[1].emit("stop");
            }
        });

        socket.on("paddleG", (y) => {
            if (this.#players.length == MAX_PLAYER){
               this.#players[1].emit("paddleG", y);
            }
        });

        socket.on("paddleD", (y) => {
            if (this.#players.length == MAX_PLAYER){
               this.#players[0].emit("paddleD", y);
            }
        });

        socket.on("message", message => {
            switch (message){
                case "deconnection":
                    this.leaveGame();
                    this.#io.send("client disconnected");
                    break;
                case "start":
                    if (this.#players.length == MAX_PLAYER){
                        this.#players[1].send("play");
                    }
                    break;
                case "playerDown":
                    if (socket === this.#players[0]){
                        this.#io.send("player1Down");
                    }
                    else{
                        this.#io.send("player2Down");
                    }
                    break;
                case "playerUp":
                    if (socket === this.#players[0]){
                        this.#io.send("player1Up");
                    }
                    else{
                        this.#io.send("player2Up");
                    }
                    break;
                case "stopPlayer":
                    if (socket === this.#players[0]){
                        this.#io.send("stopPlayer1");
                    }
                    else{
                        this.#io.send("stopPlayer2");
                    }
                    break;
                default: return;
            }
        });
    }

    /**
     * Disconnect the socket and advert him that the server is full
     * @param {*} socket 
     */
    fullServer(socket){
        socket.send("The game is full :: You are disconnected");
        socket.disconnect(); 
    }
}