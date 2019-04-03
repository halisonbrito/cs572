var EventEmitter = require("events");

class Gym extends EventEmitter{

    constructor(){
        super();
        setInterval (  () => this.emit("Boom",this.listeners("Boom")) , 1000);
    }
 
}

module.exports = Gym;
