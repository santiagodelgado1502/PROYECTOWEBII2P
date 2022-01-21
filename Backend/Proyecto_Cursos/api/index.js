const {connect} = require('mongoose');

const Container = require('./src/Startup/Container');
const Server = Container.resolve('App');
const {CADENA_CONEXION} = Container.resolve('Config');


(async()=>
{
    await connect(CADENA_CONEXION, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>
    {
        console.log('Conexion exitosa con la base de datos');
    }).catch(()=> console.log('No se pudo conectar'));
    await Server.Start();
})();





