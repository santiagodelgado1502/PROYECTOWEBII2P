const express = require('express');
const router = express.Router();
const Cursos = require('../models/Cursos.models');

router.get('', (req, res)=>{

    res.render('Crud', {Cursos:Cursos})

});

module.exports = router;