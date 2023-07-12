import Clientes from "../models/clientes.js";

const obtenerClientes = async (req,res)=>{
    const clientes = await Clientes.find();
    res.json(clientes);
};

const agregarCliente = async (req,res)=>{
    const agcliente = new Clientes(req.body);
    try {
        const nuevoCliente = await agcliente.save();
        res.json(nuevoCliente);
    } catch (error) {
        console.log(error);
    }
}

const borrarCliente = async(req,res)=>{
    try {
        await Clientes.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"no se agrego el cliente"});
    }
}

const actualizarClientes = async (req,res)=>{
    try {
        const cliente = await Clientes.findOne({_id:req.params.id});
        if (req.body.nombre) {
            cliente.nombre = req.body.nombre;
        }
        if (req.body.edad){
            cliente.edad = req.body.edad;
        }
        if ( req.body.celular){
            cliente.celular = req.body.celular;
        }
        if ( req.body.correo){
            cliente.correo = req.body.correo;
        }
        await cliente.save();
        res.send(cliente);
    } catch (error) {
        
    }
}

export {obtenerClientes,agregarCliente,borrarCliente,actualizarClientes};