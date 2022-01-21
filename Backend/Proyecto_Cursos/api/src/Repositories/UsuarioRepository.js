const BaseRepository = require('./BaseRepository');

let _Usuario = null; 

class UsuarioRepository extends BaseRepository{

    constructor({Usuario}){

        super(Usuario)
        
        _Usuario = Usuario;            

    }

}

module.exports = UsuarioRepository;