import mongoose from "mongoose";

const clientesSchema = mongoose.Schema(
    {
    nombre: {
        type: String,
        required:true,
        trim:true,
    },
    edad: {
        type: Number,
        required:true,
        trim:true,
    },
    celular: {
        type: String,
        required:true,
        trim:true,
    },
    correo: {
    type: String,
    required:true,
    trim:true,
    }
    },
    {
        timestamps: true,
    }
);


const Clientes = mongoose.model("clientes", clientesSchema);

export default Clientes;