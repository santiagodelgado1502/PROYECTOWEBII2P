const {Promocion} =require('../models/index');

const create = async (req, res)=>{
            const nuevaPromocion= await new Promocion(req.body);
            nuevaPromocion.save()            
            res.json(nuevaPromocion)
}

const  traer = async (req, res) =>{    
        const promociones = await Promocion.find({});
        res.json(promociones);    
};

const TraerId = async(req, res)=>{
        const promocionId = await Promocion.findById(req.params.id);
        res.json(promocionId);
}

const update = async (req, res)=>{       
        const modificar= await Promocion.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        await modificar.save()
        res.json({
            msg: 'Curso Modificado'
        });   
}


const deleted = async (req, res)=>{   
        const EliminarPromocion = await Promocion.findByIdAndDelete(req.params.id);
        res.json({
            msg: 'Curso Eliminado'
        });
}


module.exports={
    create,
    traer,
    TraerId,
    update,
    deleted
}