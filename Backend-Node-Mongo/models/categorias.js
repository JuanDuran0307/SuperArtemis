import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema(
    {
    imagen: {
        type: String,
        required:true,
        trim:true,
    },
    nombre: {
        type: String,
        required:true,
        trim:true,
    },
    descripcion: {
        type: String,
        required:true,
        trim:true,
    }
    },
    {
        timestamps: true,
    }
);


const Categoria = mongoose.model("categories", categoriaSchema);

export default Categoria;