const BaseRepository = require('./BaseRepository');
let _Inscripcion = null;

class InscripcionRepository extends BaseRepository{

    constructor({Inscripcion}){

        super(Inscripcion);
        _Inscripcion =  Inscripcion;

    }

}

module.exports = InscripcionRepository;