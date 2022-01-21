const BaseService = require('./BaseServices');
let _CursosRepository = null;

class CursosServices extends BaseService{

    constructor({CursosRepository}){

        super(CursosRepository);
        _CursosRepository = CursosRepository;

    }

}

module.exports = CursosServices;