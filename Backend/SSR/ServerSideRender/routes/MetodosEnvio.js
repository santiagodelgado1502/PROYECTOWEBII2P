const Express = require('express');
const Route = Express.Router();
const Axios = require('axios').default;

Route.post('/EnviandoDatos/Inscripciones', async(req, res)=>{

  const RegistroInscripcion ={
    
      Curso: req.body.Curso,
      NumeroCuenta: req.body.NumeroCuenta,
      Cedula: req.body.Cedula,
      Telefono: req.body.Telefono
  }

  const InscripcionEnviada = await Axios.post('http://localhost:8080/api/v1/Inscripcion', RegistroInscripcion);
  res.redirect('/Cursos')

});

Route.post('/EnviandoDatos/Cursos', async(req, res)=>{

  const RegistroCurso ={

    name_materia:req.body.name_materia,
    duracion:req.body.duracion,
    costo:req.body.costo,
    temas:req.body.temas

  }
  const InscripcionCurso = await Axios.post('http://localhost:8080/api/v1/Cursos', RegistroCurso);
  res.redirect('/Admin')

});

module.exports = Route;