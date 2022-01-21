var express = require('express');
var router = express.Router();
const Inscripciones = require('../models/inscripcion.model');
const Axios = require('axios').default;
const Datos = Axios.get('http://localhost:8080/api/v1/Cursos');
/* GET users listing. */

router.get('', async(req, res, next)=>{
  
  const CursosInscritos = await Datos;
  res.render('Registro', {CursosDB:CursosInscritos.data, Inscripciones:Inscripciones})

});

module.exports = router;