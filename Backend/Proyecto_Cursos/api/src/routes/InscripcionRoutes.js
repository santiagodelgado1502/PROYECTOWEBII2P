const {Router} = require('express');

module.exports = function({InscripcionController}){

    const route = Router();

    route.get('/:InscripcionId',  InscripcionController.get),
    route.get('', InscripcionController.getall),
    route.post('', InscripcionController.create),
    route.patch('/:InscripcionId', InscripcionController.update),
    route.delete('/:InscripcionId', InscripcionController.delete)

    return route;
}