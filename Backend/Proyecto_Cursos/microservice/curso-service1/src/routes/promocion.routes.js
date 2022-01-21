const { Router } = require('express');

const {PromocionController} = require('../controllers/index');

  const router = Router();

//recuperar todos los cursos registrados en la BD
router.get('/promocion', PromocionController.traer);
//recuperar 1 curso de la BD con el id del curso
router.get('/promocion/:id', PromocionController.TraerId);
// crear un curso en la BD 
router.post('/promocion', PromocionController.create);
// modificar datos de la BD con el id del curso
router.put('/promocion/:id', PromocionController.update);
// eliminar 1 curso de la BD con el id del curso
router.delete('/promocion/:id', PromocionController.deleted);
/** exportar rutas */
module.exports = router;