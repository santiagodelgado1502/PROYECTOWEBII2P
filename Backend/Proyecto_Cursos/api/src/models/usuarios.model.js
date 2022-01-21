const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema =   
new Schema(
{
    //identificacion: { type:String, require:true, max:10 },
    nombres: {type:String, require:true},
    apellidos: {type:String, require:true},
    nombreusuario:{type:String, require:true},
    correo: { type:String, require:true },
    password: {type:String, require:true},
      
},
{
     timestamps:{ craetedAt: true } 
}
);

module.exports  =  mongoose.model("Usuario", UsuarioSchema );
