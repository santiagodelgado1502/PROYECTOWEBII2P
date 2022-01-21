const BaseService = require('./BaseServices');

let _InscripcionRepository = null;

class InscripcionServices extends BaseService{

    constructor({InscripcionRepository}){

        super(InscripcionRepository);
        _InscripcionRepository = InscripcionRepository;

    }

}

module.exports = InscripcionServices;