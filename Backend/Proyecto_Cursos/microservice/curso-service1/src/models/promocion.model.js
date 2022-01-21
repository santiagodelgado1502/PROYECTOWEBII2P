const mongoose = require("mongoose");
const { Schema } = mongoose;

const PromocionSchema =   
new Schema(
{
    descripcion: { type:String },
    fecha_inicio: { type:String },
    fecha_fin: { type:String },
     
}
);

/**Exportamos los modelos  */
module.exports  =  mongoose.model("Promocion", PromocionSchema );