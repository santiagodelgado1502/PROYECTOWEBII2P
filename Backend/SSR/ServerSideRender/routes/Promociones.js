const express = require('express');
const router = express.Router();
const Axios = require('axios').default;

router.get('/', async(req, res)=>{

    const DatosPromociones = await Axios.get('http://localhost:5000/Microservicio/Promocion');
    res.render('Promociones', {Promociones:DatosPromociones.data});

});

module.exports = router;