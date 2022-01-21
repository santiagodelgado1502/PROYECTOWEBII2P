const {createContainer, asValue, asClass, asFunction} = require('awilix');

/**Variables de entorno */

const Config = require('../config/index');

/**Modelos mongoose */

const {Curso, Usuario, Inscripcion} = require('../models/index');

/**Repositorios */

const {CursosRepository, UsuarioRepository, InscripcionRepository} = require('../Repositories/Index');

/**Services */

const {CursosServices, UsuariosServices, InscripcionServices} = require('../Services/Index');

/**Controllers */

const {CursoController, UsuarioController, InscripcionController} =require('../controllers/index');

/**Rutas */

const {CursoRoutes,UsuarioRoutes, InscripcionRoutes} =require('../routes/index.routes');

/**Rutas Index */

const Routes = require('../routes/index');

/**App puerto */

const App = require('./index');


const Contenedor = createContainer();

Contenedor
    /**registro variables y mas*/
    .register
    ({
        Config:asValue(Config),
        Routes:asFunction(Routes).singleton(),
        App:asClass(App).singleton()
    })
    /**Registro Modelos */
    .register
    ({
        Curso:asValue(Curso),
        Usuario:asValue(Usuario),
        Inscripcion:asValue(Inscripcion)
    })
    /**Registro de repositios */
    .register
    ({
        CursosRepository:asClass(CursosRepository).singleton(),
        UsuarioRepository:asClass(UsuarioRepository).singleton(),
        InscripcionRepository:asClass(InscripcionRepository).singleton()  
    })
    /**Registro de services */
    .register
    ({
        CursosServices:asClass(CursosServices).singleton(),
        UsuariosServices:asClass(UsuariosServices).singleton(),
        InscripcionServices:asClass(InscripcionServices).singleton()
    })
    /**Registro de controller */
    .register
    ({
        CursoController:asClass(CursoController).singleton(),
        UsuarioController:asClass(UsuarioController).singleton(),
        InscripcionController:asClass(InscripcionController).singleton()
    })
    /**Registro de Rutas */
    .register
    ({
        CursoRoutes:asFunction(CursoRoutes).singleton(),
        UsuarioRoutes:asFunction(UsuarioRoutes).singleton(),
        InscripcionRoutes:asFunction(InscripcionRoutes).singleton()
    })

module.exports = Contenedor;