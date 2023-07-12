import Empleados from "../models/empleados.js";

const obtenerEmpleados = async (req,res)=>{
    const empleados = await Empleados.find();
    res.json(empleados);
}
const agregarEmpleado = async (req,res)=>{
    const empleados = new Empleados(req.body);
    try {
        const nuevoEmpleado = await empleados.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        console.log(error);
    }
}
const borrarEmpleado = async (req,res)=>{
    try {
        await Empleados.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"no existe el empleado"});

    }
}
const actualizarEmpleados = async (req,res)=>{
    try {
        const empleado = await Empleados.findOne({_id:req.params.id});
        if(req.body.nombre){
            empleado.nombre = req.body.nombre;
        }
        if(req.body.edad){
            empleado.edad = req.body.edad;
        }
        if(req.body.celular){
            empleado.celular = req.body.celular;
        }
        if(req.body.correo){
            empleado.correo = req.body.correo;        
        }
        if(req.body.direccion){
            empleado.direccion = req.body.direccion;
        }

        await empleado.save();
        res.send(empleado);
        
    } catch (error) {
        res.status(404);
        res.send({error:"no existe el empleado"});
        
    }
};
export {obtenerEmpleados,agregarEmpleado,borrarEmpleado,actualizarEmpleados};