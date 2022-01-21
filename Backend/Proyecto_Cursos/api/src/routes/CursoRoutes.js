const {Router} =require('express');

module.exports = function ({CursoController}) {

    const route = Router();
    /**Metodos de los controladores */
    route.get('/:CursoId', CursoController.get);
    route.get('', CursoController.getall);
    route.post('', CursoController.create);
    route.patch('/:CursoId', CursoController.update);
    route.delete('/:CursoId', CursoController.delete);

    return route;
    
}