const Express = require('express');
const cors= require("cors");
const app= Express();


module.exports = function ({CursoRoutes, UsuarioRoutes, InscripcionRoutes}) {

    const Route = Express.Router();
    const ApiRoutes = Express.Router();

    ApiRoutes
    .use(Express.json())
    .use(cors())

    ApiRoutes.use('/Cursos', CursoRoutes);
    ApiRoutes.use('/Usuarios', UsuarioRoutes);
    ApiRoutes.use('/Inscripcion', InscripcionRoutes);

    Route.use('/api/v1', ApiRoutes);
    

    return Route;

    /**Acceder por */
    /**localhost:puerto/api/vi/Ruta */


    
    
}
