const {Curso}= require('../models');

const existeCursoPorId = async( id ) => {

    // Verificar si el curso existe
    const existeCurso = await Curso.findById(id);
    if ( !existeCurso ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    existeCursoPorId
}
