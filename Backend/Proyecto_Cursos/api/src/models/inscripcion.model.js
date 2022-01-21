const mongoose = require("mongoose");
const { Schema } = mongoose;

const InscripcionSchema = new Schema({

    Curso:{type:String, require:true},
    NumeroCuenta:{type:String, require:true},
    Cedula:{type:String, require:true},
    Telefono:{type:String, require:true}

})

/**Exportamos los modelos  */
module.exports  =  mongoose.model("Inscripcion", InscripcionSchema );