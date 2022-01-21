const BaseService = require('./BaseServices');

let _UsuarioRepository = null;

class UsuariosServices extends BaseService{

    constructor({UsuarioRepository}){

        super(UsuarioRepository);
        
        _UsuarioRepository = UsuarioRepository;

    }

}

module.exports = UsuariosServices;