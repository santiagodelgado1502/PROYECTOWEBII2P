class BaseService {
    constructor(repository){
        
        this.repository = repository;

    }

    async get(id){

        if (!id) 
        {
            const error = new Error();
            error.status = 400;
            error.message = "Id Obligatorio";
            throw error;    
        }

        const Data = await this.repository.get(id);
        
        if(!Data)
        {
            const error = new Error();
            error.status = 404;
            error.message = "Entidad no encontrada";
            throw error;

        }
        return Data;

    }

    async getall(){

        return await this.repository.getall();

    }

    async create(entity){

        return await this.repository.create(entity)

    }
    
    async update(id, entity){

        if (!id){
            
            const error = new Error();
            error.status = 400
            error.message = "Id debe ser enviado";
            throw error;

        }
        return await this.repository.update(id, entity);


    }

    async delete(id){

        if (!id){
            
            const error = new Error();
            error.status = 400
            error.message = "ID Obligatorio";
            throw error;

        }
        return await this.repository.delete(id);

    }
}

module.exports = BaseService;