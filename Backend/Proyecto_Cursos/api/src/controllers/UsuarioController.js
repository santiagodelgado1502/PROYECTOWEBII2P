
let _UsuariosServices = null;

class UsuarioController{

    constructor({UsuariosServices}){

        _UsuariosServices = UsuariosServices

    }

    async get(req, res){

        const {UsuarioId} =req.params;
        const Usuario = await _UsuariosServices.get(UsuarioId);
        return res.send(Usuario);

    }

    async getall(req, res){

        const Usuarios = await _UsuariosServices.getall();
        return res.send(Usuarios);

    }

    async create(req, res){

        const {body} =req;
        const UsuarioCreado = await _UsuariosServices.create(body);
        return res.send(UsuarioCreado);

    }

    async update(req, res){

        const {UsuarioId} =req.params;
        const {body} =req;
        const UsuarioUpdate = await _UsuariosServices.update(UsuarioId, body);
        return res.send(UsuarioUpdate);

    }

    async delete(req, res){

        const {UsuarioId} = req.params;
        const UsuarioDelete = await _UsuariosServices.delete(UsuarioId);
        return res.send({
            Usuario:'eliminado'
        })

    }

}

module.exports = UsuarioController;