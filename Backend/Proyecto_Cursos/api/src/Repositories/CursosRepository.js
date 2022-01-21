const BaseRepository = require('./BaseRepository');
let _Curso = null;

class CursosRepository extends BaseRepository{

    /**modelo de la inyeccion de dependencia */
    constructor({Curso}){

        super(Curso);
        _Curso = Curso;

    }

}

module.exports = CursosRepository;