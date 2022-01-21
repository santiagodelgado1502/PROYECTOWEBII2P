let _CursosServices = null;
class CursoController {
    constructor({CursosServices}){

        _CursosServices = CursosServices;

    }

    async get(req, res){

        const {CursoId} =req.params;
        const Curso = await _CursosServices.get(CursoId);
        return res.send(Curso);

    }

    async getall(req, res){

        const Curso = await _CursosServices.getall();
        return res.send(Curso);

    }

    async create(req, res){

        const {body} =req;
        const CursoCreado = await _CursosServices.create(body);
        return res.send(CursoCreado);

    }

    async update(req, res){

        const {CursoId} =req.params;
        const {body} =req;
        const CursoUpdate = await _CursosServices.update(CursoId, body);
        return res.send(CursoUpdate);

    }

    async delete(req, res){

        const {CursoId} = req.params;
        const Cursodelete = await _CursosServices.delete(CursoId);
        return res.send({
            Curso:'eliminado'
        })

    }

}

module.exports = CursoController;