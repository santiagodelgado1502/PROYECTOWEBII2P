let _InscripcionServices = null;

class InscripcionController {

    constructor({InscripcionServices}){

        _InscripcionServices = InscripcionServices;

    }

    
    async get(req, res){

        const {InscripcionId} =req.params;
        const Inscripcion = await _InscripcionServices.get(InscripcionId);
        return res.send(Inscripcion);

    }

    async getall(req, res){

        const Inscripcion = await _InscripcionServices.getall();
        return res.send(Inscripcion);

    }

    async create(req, res){

        const {body} =req;
        const InscripcionCreada = await _InscripcionServices.create(body);
        return res.send(InscripcionCreada);

    }

    async update(req, res){

        const {InscripcionId} =req.params;
        const {body} =req;
        const InscripcionUpdate = await _InscripcionServices.update(InscripcionId, body);
        return res.send(InscripcionUpdate);

    }

    async delete(req, res){

        const {InscripcionId} = req.params;
        const Inscripiondelete = await _InscripcionServices.delete(InscripcionId);
        return res.send({
            Inscripcion:'eliminada'
        })

    }



}

module.exports = InscripcionController;