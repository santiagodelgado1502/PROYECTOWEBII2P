const {Router} =require('express');

module.exports = function ({UsuarioController}) {

    const route = Router();
    /***Metodos del repositorio */
    route.get('/:UsuarioId', UsuarioController.get);
    route.get('', UsuarioController.getall);
    route.post('', UsuarioController.create);
    route.patch('/:UsuarioId', UsuarioController.update);
    route.delete('/:UsuarioId', UsuarioController.delete);
    
    return route;
    
}