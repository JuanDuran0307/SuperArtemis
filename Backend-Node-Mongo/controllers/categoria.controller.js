import Categoria from "../models/categorias.js";

const obtenerCategoria = async (req,res)=>{
    const categoriaa = await Categoria.findOne({_id: req.params.id});
    res.json(categoriaa);
    
};
const obtenerCategorias = async (req,res) =>{
    const categorias = await Categoria.find();

    res.json(categorias);


};

const agregarCategorias = async (req,res)=>{
    const categorias = new Categoria(req.body);
    try {
        const nuevacategoria = await categorias.save();

        res.json(nuevacategoria);
        
    } catch (error) {
        console.log(error);
    }

};



const borrarCategorias = async ( req,res)=>{
    try {
        await Categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"categoria no existe"});
    }

};

const actualizarCategorias = async(req,res)=>{
    try {
        const categoria = await Categoria.findOne({_id: req.params.id});
        if(req.body.imagen){
            categoria.imagen = req.body.imagen;
        }
        if (req.body.nombre){
            categoria.nombre = req.body.nombre;
        }
        if (req.body.descripcion){
            categoria.nombre = req.body.descripcion;
        }

        await categoria.save()
        res.send(categoria)

    } catch (error) {
        res.status(404);
        res.send({error:"categoria no existe"});
        
    }
};


export {obtenerCategoria,obtenerCategorias,agregarCategorias,borrarCategorias,actualizarCategorias};