const mongoose = require("mongoose");
const { Schema } = mongoose;

const CursoSchema =   
new Schema(
{
    id_curso: { type:String , require:true},
    name_materia: { type:String, require:true },
    duracion: { type:String , require:true},
    costo: { type:String , require:true}, 
    //instructor: {},
    temas: {type:String, require:true}   
}
);


module.exports  =  mongoose.model("Curso", CursoSchema );

