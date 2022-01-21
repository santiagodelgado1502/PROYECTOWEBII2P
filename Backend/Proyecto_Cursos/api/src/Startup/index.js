const Express = require('express');
const jwt = require('jsonwebtoken');

let _Express = null;
let _Config = null;

class Server{

    /**Mismas variables del container */
    constructor({Routes, Config}){

        _Express = Express().use(Routes);
        _Config = Config;
    }

    Start(){

        return new Promise(resolve=>
            
            {
                _Express.listen(_Config.PORT || 8080, ()=>{
                    
                    console.log(`App ${_Config.APPLICATION_NAME} corriendo por el puerto ${_Config.PORT}`);
                    /**Resolvemos */
                    resolve();    

                })
            })

    }

}

module.exports = Server;