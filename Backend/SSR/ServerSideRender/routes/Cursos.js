var express = require('express');
var router = express.Router();
const Axios = require('axios').default;
const Datos = Axios.get('http://localhost:8080/api/v1/Cursos');

/* GET home page. */
router.get('/', async(req, res, next)=> {

  const Cursos = await Datos;
  res.render('Cursos', {

        TituloPrincipal: 'Estos son los cursos disponibles actualmente',
        Cursos:Cursos.data,
        TituloSecundario: 'Muy Pronto tendremos mas cursos, esperalos',
   
  });
  
});

module.exports = router;