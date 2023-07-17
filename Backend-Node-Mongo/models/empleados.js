import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true,
        },
        edad:{
            type:Number,
            required:true,
            trim:true,
        },
        celular:{
            type:String,
            required:true,
            trim:true,
        },
        correo:{
            type:String,
            required:true,
            trim:true,
        }

    },
    {
        timestamps:true,
    }
);

const Empleados = mongoose.model("empleados", empleadosSchema);

export default Empleados;